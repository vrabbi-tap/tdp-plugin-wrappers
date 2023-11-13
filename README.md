# TDP Plugin Wrappers
In this repo you will find plugin wrappers built and tested for TAP 1.7 based on OSS backstage plugins. they have been tested against TAP 1.7 but are in alpha state. they are viable for POCing and demoing the TDP Configurator and how it can be extended.
  
An [example TDP Config file](./sample-tdp-config-file.yaml) is provided as well.  

# Integrations
<details>
  <summary><h2>Github</h2></summary>
<details>
  <summary><h3>Github Insights</h3></summary>  
  
  * [Wrapper Code](./plugins/github-insights-wrapper)  
  * [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-insights/README.md)  
  * [Published Package](https://www.npmjs.com/package/@vrabbi/github-insights-wrapper)

<details>
  <summary>Required Configuration</summary>

  This plugin requires configuring:
  1. [Github Authentication](https://backstage.io/docs/auth/github/provider)
  2. [Github Integration](https://backstage.io/docs/integrations/github/locations)

</details>
<details>
  <summary>Annotations</summary>

  Required annotations:  
  * github.com/project-slug  
  
  Optional annotations:  
  * github.com/project-readme-path

</details>
</details>
<details>
  <summary><h3>Github Pull Requests</h3></summary>  
  
  * [Wrapper Code](./plugins/github-pull-requests-wrapper)
  * [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-pull-requests/README.md)  
  * [Published Package](https://www.npmjs.com/package/@vrabbi/github-pull-requests-wrapper)

<details>
  <summary>Required Configuration</summary>

  This plugin requires configuring:
  1. [Github Authentication](https://backstage.io/docs/auth/github/provider)
  2. [Github Integration](https://backstage.io/docs/integrations/github/locations)

</details>
<details>
  <summary>Annotations</summary>

  Required annotations:  
  * github.com/project-slug  
  
  Optional annotations:  
  * roadie-backstage-pull-requests/default-filter

</details>
</details>
<details>
  <summary><h3>Github Issues</h3></summary>  
  
  * [Wrapper Code](./plugins/github-issues-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/github-issues/README.md)  
  * [Published Package](https://www.npmjs.com/package/@vrabbi/github-issues-wrapper)

<details>
  <summary>Required Configuration</summary>

  This plugin requires configuring:
  1. [Github Authentication](https://backstage.io/docs/auth/github/provider)
  2. [Github Integration](https://backstage.io/docs/integrations/github/locations)

</details>
<details>
  <summary>Annotations</summary>

  Required annotations:  
  * github.com/project-slug  

</details>
</details>
<details>
  <summary><h3>Github Actions</h3></summary>  
  
  * [Wrapper Code](./plugins/github-actions-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/github-actions/README.md)  
  * [Published Package](https://www.npmjs.com/package/@vrabbi/github-actions-wrapper)

<details>
  <summary>Required Configuration</summary>

  This plugin requires configuring:
  1. [Github Authentication](https://backstage.io/docs/auth/github/provider)
  2. [Github Integration](https://backstage.io/docs/integrations/github/locations)

</details>
<details>
  <summary>Annotations</summary>

  Required annotations:  
  * github.com/project-slug  

</details>
</details>
<details>
  <summary><h3>Github Security Insights</h3></summary>  
  
  * [Wrapper Code](./plugins/security-insights-wrapper)
  * [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-security-insights/README.md)  
  * [Published Package](https://www.npmjs.com/package/@vrabbi/security-insights-wrapper)

<details>
  <summary>Required Configuration</summary>

  This plugin requires configuring:
  1. [Github Authentication](https://backstage.io/docs/auth/github/provider)
  2. [Github Integration](https://backstage.io/docs/integrations/github/locations)

</details>
<details>
  <summary>Annotations</summary>

  Required annotations:  
  * github.com/project-slug  

</details>
</details>
</details> 
<details>
  <summary><h2>Azure DevOps</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/azure-devops-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/azure-devops-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin requires configuring the backend plugin

</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * dev.azure.com/project-repo
    
  Optional Annotations:
  * dev.azure.com/project
  * dev.azure.com/build-definition

</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/azure-devops-wrapper-backend)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/azure-devops-backend/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/azure-devops-wrapper-backend)

<details>
  <summary>Required Configuration</summary>    
  
  This plugin requires a dedicated Azure DevOps stanza:  
  ```yaml
  azureDevOps:
    host: dev.azure.com
    token: AZURE_TOKEN
    organization: my-company
  ```  
  Configuration Details:  
  * host and token can be the same as the ones used for the integration section
  * AZURE_TOKEN should be replaced with a Personal Access Token with read access to both Code and Build
  * organization is your Azure DevOps Services (cloud) Organization name or for Azure DevOps Server (on-premise) this will be your Collection name  

</details>
</details>
</details>
<details>
  <summary><h2>Tekton</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/tekton-wrapper)
  * [Source Plugin Repo](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/tekton/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/tekton-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin has no extra dependencies

</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * backstage.io/kubernetes-label-selector or  backstage.io/kubernetes-id
  * janus-idp.io/tekton
    
  Optional Annotations:
  * backstage.io/kubernetes-namespace

</details>
</details>
</details>
<details>
  <summary><h2>Jenkins</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/jenkins-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/jenkins/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/jenkins-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin requires configuring the backend plugin

</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * jenkins.io/job-full-name
    
</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/jenkins-wrapper-backend)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/jenkins-backend/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/jenkins-wrapper-backend)

<details>
  <summary>Required Configuration</summary>    
  
  This plugin needs a dedicated jenkins stanza which has multiple formats based on your use case:  
  #### Simgle Jenkins Server
  ```yaml
  jenkins:
    baseUrl: https://jenkins.example.com
    username: backstage-bot
    apiKey: 123456789abcdef0123456789abcedf012
  ```
  #### Multiple Jenkins Servers
  ```yaml
  jenkins:
    instances:
    - name: default
      baseUrl: https://jenkins.example.com
      username: backstage-bot
      apiKey: 123456789abcdef0123456789abcedf012
    - name: departmentFoo
      baseUrl: https://jenkins-foo.example.com
      username: backstage-bot
      apiKey: 123456789abcdef0123456789abcedf012
```  
  Configuration Details:  
  * when using multiple jenkins servers, the value of the component annotation when referencing a jenkins server which is not named default must be in the format \<JENKINS CONFIG NAME\>:\<FOLDER\>/\<JOB\>. if the name section is not added, the default jenkins server will be used.  

</details>
</details>
</details>
<details>
  <summary><h2>TODO</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/todo-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/todo/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/todo-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin requires configuring the backend plugin

</details>
<details>
  <summary>Annotations</summary>

  Optional Annotations:  
  * backstage.io/source-location
    
</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/todo-wrapper-backend)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/todo-backend/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/todo-wrapper-backend)

<details>
  <summary>Required Configuration</summary>    
  
  This plugin has no needed configuration.

</details>
</details>
</details>
<details>
  <summary><h2>Harbor</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/harbor-wrapper)
  * [Source Plugin Repo](https://github.com/container-registry/backstage-plugin-harbor/blob/master/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/harbor-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin requires configuring the backend plugin

</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * goharbor.io/repository-slug
    
</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/harbor-wrapper-backend)
  * [Source Plugin Repo](https://github.com/container-registry/backstage-plugin-harbor-backend)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/harbor-wrapper-backend)

<details>
  <summary>Required Configuration</summary>    
  
  under app_config in TAP GUI section you must add the following:
  ```yaml
  harbor:
    baseUrl: https://YOUR_HARBOR_FQDN #! Required
    username: YOUR_HARBOR_USER #! Required
    password: YOUR_HARBOR_USER #! Required
  ```
  
</details>
</details>
</details>
<details>
  <summary><h2>FluxCD</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/flux-wrapper)
  * [Source Plugin Repo](https://github.com/weaveworks/weaveworks-backstage/blob/main/plugins/backstage-plugin-flux/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/flux-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin has no extra dependencies

</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * backstage.io/kubernetes-label-selector or backstage.io/kubernetes-id
    
  Optional Annotations:
  * backstage.io/kubernetes-namespace

</details>
</details>
</details>
<details>
  <summary><h2>Grafana</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/grafana-wrapper)
  * [Source Plugin Repo](https://github.com/K-Phoen/backstage-plugin-grafana)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/grafana-wrapper)

<details>
  <summary>Required Configuration</summary>    

  under app_config we must add values to the proxy section as well as a dedicated section for Grafana:  
  ```yaml
  proxy:
    '/grafana/api':
      # May be a public or an internal DNS
      target: https://YOUR_GRAFANA_FQDN
      headers:
        Authorization: Bearer YOUR_GRAFANA_TOKEN
  
  grafana:
    # Publicly accessible domain
    domain: https://YOUR_GRAFANA_FQDN
  
    # Is unified alerting enabled in Grafana?
    # See: https://grafana.com/blog/2021/06/14/the-new-unified-alerting-system-for-grafana-everything-you-need-to-know/
    # Optional. Default: false
    unifiedAlerting: false
  ```
  
</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * grafana/dashboard-selector

</details>
</details>
</details>
<details>
  <summary><h2>Prometheus</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/prometheus-wrapper)
  * [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-prometheus/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/prometheus-wrapper)

<details>
  <summary>Required Configuration</summary>    

  under app_config we must add values to the proxy section as well as a dedicated section for prometheus:
  ```yaml
  proxy:
    '/prometheus/api':
      # url to the api and path of your hosted prometheus instance
      target: http://YOUR_PROMETHEUS_FQDN_INCLUDING_PORT/api/v1/
      changeOrigin: true
      secure: false
  
  # Defaults to /prometheus/api and can be omitted if proxy is configured for that url
  prometheus:
    proxyPath: /prometheus/api
    uiUrl: http://YOUR_PROMETHEUS_FQDN_INCLUDING_PORT
  ```
  
</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * prometheus.io/rule

</details>
</details>
</details>
<details>
  <summary><h2>Tech Radar</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/tech-radar-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-radar/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/tech-radar-wrapper)
  
</details>
</details>
<details>
  <summary><h2>Tech Insights</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/tech-insights-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-insights/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/tech-insights-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin requires configuring the backend plugin

</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/tech-insights-wrapper-backend)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-insights-backend/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/tech-insights-wrapper-backend)

</details>
</details>
<details>
  <summary><h2>OpenAI - ChatGPT</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/chatgpt-wrapper)
  * [Source Plugin Repo](https://github.com/enfuse/backstage-chatgpt-plugin/blob/main/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper)

<details>
  <summary>Required Configuration</summary>    

  This plugin requires configuring the backend plugin

</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/chatgpt-wrapper-backend)
  * [Source Plugin Repo](https://github.com/enfuse/backstage-chatgpt-backend/blob/master/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper-backend)

<details>
  <summary>Required Configuration</summary>    
  
  under app_config in TAP GUI section you must add the following:  
  ```yaml
  openai:
    apiKey: YOUR_OPENAI_API_KEY #! Required
    baseURL: #! (OPTIONAL) - Defaults to https://api.openai.com/v1 which is the public OpenAI endpoint
  ```  

</details>
</details>
</details>
<details>
  <summary><h2>K8sGPT</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/k8s-gpt-wrapper)
  * [Source Plugin Repo](https://github.com/suxess-it/backstage-plugin-k8sgpt/blob/main/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/k8s-gpt-wrapper)
  
</details>
</details>
<details>
  <summary><h2>Developer Toolbox</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/dev-toolbox-wrapper)
  * [Source Plugin Repo](https://github.com/drodil/backstage-plugin-toolbox/blob/main/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/dev-toolbox-wrapper)
  
</details>
</details>
<details>
  <summary><h2>Backstage Dev Tools</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/backstage-devtools-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/devtools/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/backstage-devtools-wrapper)

<details>
  <summary>Required Configuration</summary>    
  
  This plugin requires configuring the backend plugin
</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/backstage-devtools-wrapper-backend)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/devtools-backend/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/backstage-devtools-wrapper-backend)

</details>
</details>
<details>
  <summary><h2>Hashicorp Vault</h2></summary>
<details>
  <summary><h3>Frontend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/vault-wrapper)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/vault/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/vault-wrapper)

<details>
  <summary>Required Configuration</summary>    
  
  This plugin requires configuring the backend plugin

</details>
<details>
  <summary>Annotations</summary>

  Required Annotations:  
  * vault.io/secrets-path
    
</details>
</details>
<details>
  <summary><h3>Backend Plugin</h3></summary>
  
  * [Wrapper Code](./plugins/vault-wrapper-backend)
  * [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/vault-backend/README.md)
  * [Published Package](https://www.npmjs.com/package/@vrabbi/vault-wrapper-backend)

<details>
  <summary>Required Configuration</summary>    
  
  under app_config we must add a dedicated section for our Vault configuration:
  ```yaml
  vault:
    baseUrl: http://your-internal-vault-url.svc
    publicUrl: https://your-vault-url.example.com
    token: <VAULT_TOKEN>
    secretEngine: 'customSecretEngine' # Optional. By default it uses 'secrets'. Can be overwritten by the annotation of the entity
    kvVersion: <kv-version> # Optional. The K/V version that your instance is using. The available options are '1' or '2'
    schedule: # Optional. If the token renewal is enabled this schedule will be used instead of the hourly one
      frequency: { hours: 1 }
      timeout: { hours: 1 }
  ```
  
</details>
</details>
</details>