---
title: Aula 14-05
sidebar_position: 3
---
---

# Aula 14-05 ComNuv

## 1. Aplicação React JS [Web]

- **Deploy e Workflow**: A aplicação foi comitada na branch `main` e agora deve ser publicada no **Render**.
  - Utilização de **Docker** com uma imagem de **Express**.
  - **Github Actions** para automação do pipeline.
  - **Docker Hub** para armazenar a imagem:
    - A tag será dinâmica, gerada a partir da aplicação.
  - Deploy final no **Render**.
  - É recomendada a criação de uma camada **API** (opcional, mas uma boa prática).

Dentro do **Github**, um workflow será criado para **forçar a imagem** no repositório. Isso é semelhante ao workflow que já foi utilizado no **Docusaurus** em outra aula.

### Passos:
1. Criar a aplicação com o seguinte comando:

   ```bash
   npx create-react-app --template typescript exemplo-build-ui
   cd exemplo-build-ui
   ```

2. **Arquivo YAML** para o Github Actions:
   - **Secrets do Github**: Adicionar as chaves de ambiente (`API keys`, `Docker credentials`, etc.) dentro de `Settings > Secrets` no repositório.
   - No **Docker Hub**, gerar uma **Access Key**:
     - Salvar essa chave e associá-la aos **Secrets** do Github.
   - Executar o **docker push** para enviar a imagem ao Docker Hub.

#### Portas no Docker:
- **0-1023**: Portas baixas.
- **1024-65535**: Portas altas.

---

## 2. Kubernetes Play

### Início da Instância
Dentro do **Kubernetes Play**, iniciamos a instância e copiamos o código para executar os comandos.

- O `kubectl` traduz os comandos para requisições que a **API dos nodes** executa. O `kubeadm` normalmente é usado para criar o cluster ou reinicializá-lo.

### Comandos executados:

1. **Inicializar o cluster no master node**:

   ```bash
   kubeadm init --apiserver-advertise-address $(hostname -i) --pod-network-cidr 10.5.0.0/16
   ```

2. **Inicializar a rede do cluster**:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/cloudnativelabs/kube-router/master/daemonset/kubeadm-kuberouter.yaml
   ```

3. **Criar um deployment do NGINX (opcional)**:

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/application/nginx-app.yaml
   ```

Executamos o código do **passo 1**, que gerou um **código de join**. Esse código foi utilizado na segunda instância para adicionar o node:

```bash
kubeadm join 192.168.0.23:6443 --token g0k0bu.5lgwumf2ehpt1iel \
    --discovery-token-ca-cert-hash sha256:f45942f2acb5ea840d4386c66542272575fb12a3ff95a2e91206a3d80d7e4b51
```

Agora temos duas máquinas: uma configurada como **master node** e outra como **work node**.

- **Cluster Quorum**: Pode haver mais de uma master, mas deve-se levar em consideração o quorum para tomada de decisões no cluster.

### Verificação:
- Executamos o **comando 3** no master.
- Com os comandos `kubectl get node` e `kubectl get pods`, verificamos que o sistema cria automaticamente novos pods se algum for deletado, graças à configuração de **replicas: 3**, que garante a existência de 3 instâncias da aplicação.

---

## Conceitos de Networking no Kubernetes:

- **Cluster IP**: Endereço IP usado para comunicação dentro do cluster.
- **Node Port**: Permite acesso externo ao serviço em uma porta específica.
- **Load Balancer**: Distribui o tráfego entre os nodes.

### Executar um comando curl via Busybox no Kubernetes:

```bash
kubectl run curl-cmd \
--image=radial/busyboxplus:curl \
-i --tty --rm
```

- Executamos o comando acima para testar o acesso ao serviço NGINX via **curl** no endereço:

  ```http
  http://192.168.0.23:30251
  ```

---