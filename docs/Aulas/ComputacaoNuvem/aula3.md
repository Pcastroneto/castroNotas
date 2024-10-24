---
title: Aula 14-05
sidebar_position: 3
---
---

Aqui está a reformulação do conteúdo com base no novo formato solicitado:

---

# Aula 14-05 ComNuv

## 1. Aplicação React JS [Web]

### Deploy e Workflow

A aplicação foi comitada na branch `main` e agora precisa ser publicada no **Render**. A seguir estão os passos principais para realizar esse processo:

- Utilização de **Docker** para criar uma imagem de **Express**.
- **Github Actions** para automação do pipeline de integração e deploy contínuo.
- Publicar a imagem no **Docker Hub**:
  - A **tag** da imagem será gerada dinamicamente a partir da aplicação.
- Deploy final da aplicação no **Render**.
- **Camada API**: Não é obrigatória, mas é recomendada para melhorar a organização e escalabilidade.

#### Workflow no Github

Dentro do **Github**, será criado um workflow para **forçar a imagem no repositório**, processo semelhante ao utilizado no **Docusaurus** em uma aula anterior.

### Passos:

1. Criar a aplicação React com o comando:

   ```bash
   npx create-react-app --template typescript exemplo-build-ui
   cd exemplo-build-ui
   ```

2. Criar o arquivo YAML para configurar o **Github Actions**:
   - Dentro de **Settings > Secrets**, adicionar as variáveis de ambiente, como **API Keys** e **credenciais do Docker**.
   - No **Docker Hub**, gerar uma **Access Key** e salvar essa chave, associando-a aos **Secrets** do Github.
   - Executar o comando `docker push` para enviar a imagem ao **Docker Hub**.

### Configuração das Portas no Docker:

- **0-1023**: Portas baixas.
- **1024-65535**: Portas altas.

---

## 2. Kubernetes Play

### Iniciando a Instância

No **Kubernetes Play**, iniciamos uma instância e utilizamos os seguintes comandos para configurar o ambiente. O **kubectl** é a ferramenta que envia os comandos para a **API dos nodes**, e o **kubeadm** é usado para inicializar ou reiniciar o cluster.

### Comandos Executados:

1. **Inicializar o cluster no node master**:

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

Após o comando de inicialização no **node master**, foi gerado um **código de join** que usamos para adicionar um segundo node ao cluster:

```bash
kubeadm join 192.168.0.23:6443 --token g0k0bu.5lgwumf2ehpt1iel \
    --discovery-token-ca-cert-hash sha256:f45942f2acb5ea840d4386c66542272575fb12a3ff95a2e91206a3d80d7e4b51
```

Com isso, configuramos duas máquinas: uma como **master node** e outra como **work node**.

- **Cluster Quorum**: É possível configurar mais de um master node, mas é importante levar em consideração o **quorum** para garantir que o cluster funcione corretamente.

### Verificação:

- Executamos o **comando 3** no master node para criar o deployment do NGINX.
- Com os comandos `kubectl get node` e `kubectl get pods`, verificamos o status dos nodes e pods. Observamos que o Kubernetes recria os pods automaticamente se algum for removido, devido à configuração `replicas: 3`, que mantém sempre três instâncias do NGINX rodando.

---

## Conceitos de Networking no Kubernetes

- **Cluster IP**: Usado para comunicação interna entre os pods do cluster.
- **Node Port**: Expõe um serviço do cluster para fora, mapeando uma porta externa para uma porta interna do cluster.
- **Load Balancer**: Distribui as requisições entre os nodes para balancear a carga de trabalho.

### Testando Conexão via curl no Kubernetes

Para testar a comunicação com o serviço NGINX, rodamos o comando abaixo no Kubernetes:

```bash
kubectl run curl-cmd \
--image=radial/busyboxplus:curl \
-i --tty --rm
```

Acessamos o serviço NGINX com o comando **curl** no endereço:

```http
http://192.168.0.23:30251
```

Esse comando faz uma requisição HTTP ao serviço rodando no cluster.

---