# TDP Plugin Wrappers
In this repo you will find plugin wrappers built and tested for TAP 1.7 based on OSS backstage plugins. they have been tested against TAP 1.7 but are in alpha state. they are viable for POCing and demoing the TDP Configurator and how it can be extended.
  
An [example TDP Config file](./sample-tdp-config-file.yaml) is provided as well.  

## Existing Wrappers  
| **Area**                  | **Integration**             | **Plugin Type** | **Wrapper Code**                                             | **Source Plugin**                                                                                                                                     | **Published Package**                                                                         |
| ------------------------- | --------------------------- | --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **SCM**                   | **Github Insights**         | **Frontend**    | [Wrapper Code](./plugins/github-insights-wrapper)            | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-insights/README.md)      | [Published Package](https://www.npmjs.com/package/@vrabbi/github-insights-wrapper)            |
| **SCM**                   | **Github Pull Requests**    | **Frontend**    | [Wrapper Code](./plugins/github-pull-requests-wrapper)       | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-pull-requests/README.md) | [Published Package](https://www.npmjs.com/package/@vrabbi/github-pull-requests-wrapper)       |
| **SCM and CICD**          | **Github Actions**          | **Frontend**    | [Wrapper Code](./plugins/github-actions-wrapper)             | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/github-actions/README.md)                                             | [Published Package](https://www.npmjs.com/package/@vrabbi/github-actions-wrapper)             |
| **SCM**                   | **Github Issues**           | **Frontend**    | [Wrapper Code](./plugins/github-issues-wrapper)              | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/github-issues/README.md)                                              | [Published Package](https://www.npmjs.com/package/@vrabbi/github-issues-wrapper)              |
| **SCM and Security**      | **Github Securiy Insights** | **Frontend**    | [Wrapper Code](./plugins/security-insights-wrapper)          | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-security-insights/README.md)    | [Published Package](https://www.npmjs.com/package/@vrabbi/security-insights-wrapper)          |
| **SCM and CICD**          | **Azure DevOps**            | **Frontend**    | [Wrapper Code](./plugins/azure-devops-wrapper)               | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/azure-devops/README.md)                                               | [Published Package](https://www.npmjs.com/package/@vrabbi/azure-devops-wrapper)               |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/azure-devops-wrapper-backend)       | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/azure-devops-backend/README.md)                                       | [Published Package](https://www.npmjs.com/package/@vrabbi/azure-devops-wrapper-backend)       |
| **CICD**                  | **Tekton**                  | **Frontend**    | [Wrapper Code](./plugins/tekton-wrapper)                     | [Source Plugin Repo](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/tekton/README.md)                                               | [Published Package](https://www.npmjs.com/package/@vrabbi/tekton-wrapper)                     |
| **CICD**                  | **Jenkins**                 | **Frontend**    | [Wrapper Code](./plugins/jenkins-wrapper)                    | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/jenkins/README.md)                                                    | [Published Package](https://www.npmjs.com/package/@vrabbi/jenkins-wrapper)                    |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/jenkins-wrapper-backend)            | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/jenkins-backend/README.md)                                            | [Published Package](https://www.npmjs.com/package/@vrabbi/jenkins-wrapper-backend)            |
| **SCM**                   | **TODO**                    | **Frontend**    | [Wrapper Code](./plugins/todo-wrapper)                       | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/todo/README.md)                                                       | [Published Package](https://www.npmjs.com/package/@vrabbi/todo-wrapper)                       |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/todo-wrapper-backend)               | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/todo-backend/README.md)                                               | [Published Package](https://www.npmjs.com/package/@vrabbi/todo-wrapper-backend)               |
| **Registry and Security** | **Harbor**                  | **Frontend**    | [Wrapper Code](./plugins/harbor-plugin-wrapper)              | [Source Plugin Repo](https://github.com/container-registry/backstage-plugin-harbor/blob/master/README.md)                                             | [Published Package](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper)              |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/harbor-plugin-wrapper-backend)      | [Source Plugin Repo](https://github.com/container-registry/backstage-plugin-harbor-backend)                                                           | [Published Package](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper-backend)      |
| **GitOps**                | **FluxCD**                  | **Frontend**    | [Wrapper Code](./plugins/flux-wrapper)                       | [Source Plugin Repo](https://github.com/weaveworks/weaveworks-backstage/blob/main/plugins/backstage-plugin-flux/README.md)                            | [Published Package](https://www.npmjs.com/package/@vrabbi/flux-wrapper)                       |
| **Monitoring**            | **Grafana**                 | **Frontend**    | [Wrapper Code](./plugins/grafana-wrapper)                    | [Source Plugin Repo](https://github.com/K-Phoen/backstage-plugin-grafana)                                                                             | [Published Package](https://www.npmjs.com/package/@vrabbi/grafana-wrapper)                    |
| **Monitoring**            | **Prometheus**              | **Frontend**    | [Wrapper Code](./plugins/prometheus-wrapper)                 | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-prometheus/README.md)           | [Published Package](https://www.npmjs.com/package/@vrabbi/prometheus-wrapper)                 |
| **Dev Tools**             | **Tech Radar**              | **Frontend**    | [Wrapper Code](./plugins/tech-radar-wrapper)                 | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-radar/README.md)                                                 | [Published Package](https://www.npmjs.com/package/@vrabbi/tech-radar-wrapper)                 |
| **Monitoring**            | **Tech Insights**           | **Frontend**    | [Wrapper Code](./plugins/tech-insights-wrapper)              | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-insights/README.md)                                              | [Published Package](https://www.npmjs.com/package/@vrabbi/tech-insights-wrapper)              |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/tech-insights-wrapper-backend)      | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-insights-backend/README.md)                                      | [Published Package](https://www.npmjs.com/package/@vrabbi/tech-insights-wrapper-backend)      |
| **Dev Tools**             | **ChatGPT**                 | **Frontend**    | [Wrapper Code](./plugins/chatgpt-wrapper)                    | [Source Plugin Repo](https://github.com/enfuse/backstage-chatgpt-plugin/blob/main/README.md)                                                          | [Published Package](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper)                    |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/chatgpt-wrapper-backend)            | [Source Plugin Repo](https://github.com/enfuse/backstage-chatgpt-backend)                                                                             | [Published Package](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper-backend)            |
| **Monitoring**            | **K8sGPT**                  | **Frontend**    | [Wrapper Code](./plugins/k8s-gpt-wrapper)                    | [Source Plugin Repo](https://github.com/suxess-it/backstage-plugin-k8sgpt/blob/main/README.md)                                                        | [Published Package](https://www.npmjs.com/package/@vrabbi/k8s-gpt-wrapper)                    |
| **Dev Tools**             | **Toolbox**                 | **Frontend**    | [Wrapper Code](./plugins/dev-toolbox-wrapper)                | [Source Plugin Repo](https://github.com/drodil/backstage-plugin-toolbox/blob/main/README.md)                                                          | [Published Package](https://www.npmjs.com/package/@vrabbi/dev-toolbox-wrapper)                |
| **Operations**            | **Backstage Dev Tools**     | **Frontend**    | [Wrapper Code](./plugins/backstage-devtools-wrapper)         | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/devtools/README.md)                                                   | [Published Package](https://www.npmjs.com/package/@vrabbi/backstage-devtools-wrapper)         |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/backstage-devtools-wrapper-backend) | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/devtools-backend/README.md)                                           | [Published Package](https://www.npmjs.com/package/@vrabbi/backstage-devtools-wrapper-backend) |
| **Security**              | **Vault**                   | **Frontend**    | [Wrapper Code](./plugins/vaulr-wrapper)                      | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/vault/README.md)                                                      | [Published Package](https://www.npmjs.com/package/@vrabbi/vault-wrapper)                      |
|                           |                             | **Backend**     | [Wrapper Code](./plugins/vaulr-wrapper-backend)              | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/vault-backend/README.md)                                              | [Published Package](https://www.npmjs.com/package/@vrabbi/vault-wrapper-backend)              |
    
## Plugins With Needed Config In TAP Values:
### Github Insights, Github Actions, Github Pull Requests, Security Insights, Github Issues
Require Github Integration be configured
### Harbor
under app_config in TAP GUI section you must add the following:
```yaml
harbor:
  baseUrl: https://YOUR_HARBOR_FQDN #! Required
  username: YOUR_HARBOR_USER #! Required
  password: YOUR_HARBOR_USER #! Required
```  
### ChatGPT
under app_config in TAP GUI section you must add the following:  
```yaml
openai:
  apiKey: YOUR_OPENAI_API_KEY #! Required
  baseURL: #! (OPTIONAL) - Defaults to https://api.openai.com/v1 which is the public OpenAI endpoint
```  
### FluxCD and Tekton
Requires the kubernetes plugin be configured

### Grafana
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

### Prometheus
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

### Jenkins
under app_config we must add a jenkins section with the details of our jenkins server/s:  
This example is for a single jenkins server, but multiple can be configured. chheck the source plugins docs for more information.  
```yaml
jenkins:
  baseUrl: JENKINS_URL
  username: JENKINS_USER_NAME
  apiKey: JENKINS_API_KEY
```  

### Azure DevOps
under app_config we must add a dedicated section for our ADO configuration:  
```yaml
azureDevOps:
  host: dev.azure.com
  token: YOUR_AZURE_TOKEN
  organization: YOUR_ORG
```

### Vault
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
  
## Annotations on catalog-info.yaml files
### Github Insights, Github Actions, Github Pull Requests, Github Issues
```yaml
annotations:
  github.com/project-slug: REPO_SLUG
```  
for example:  
```yaml
annotations:
  github.com/project-slug: vrabbi/spring-petclinic
```  
### Harbor
```yaml
annotations:
  goharbor.io/repository-slug: REPO_SLUG
```  
for example:  
```yaml
annotations:
  goharbor.io/repository-slug: tap/workloads/petclinic-demo-apps
```  
### FluxCD, Tekton
```yaml
annotations:
  # Option 1 - this annotation must be set on the Flux CRs as well
  backstage.io/kubernetes-id: VALUE
  # Option 2 - The easier method using a custom label selector which the value must exist on the Flux CRs but is customizable for your needs
  backstage.io/kubernetes-label-selector: K8S_LABEL_SELECTOR
```  
for example:
```yaml
annotations:
  backstage.io/kubernetes-id: my-app
```  
or:  
```yaml
annotations:
  backstage.io/kubernetes-label-selector: 'app=my-app'
```  
### Tekton Pipelines Additional Annotations
```yaml
annotations:
  janus-idp.io/tekton: <BACKSTAGE_ENTITY_NAME>
```  
for example:  
```yaml
annotations:
  janus-idp.io/tekton: pacman
```  
### Grafana
```yaml
annotations:
  grafana/dashboard-selector: PLUGIN_SELECTOR_SYNTAX
```  
for example:
```yaml
annotations:
  grafana/dashboard-selector: "(tags @> 'my-service' || tags @> 'my-service-slo') && tags @> 'generated'"
```  

### Prometheus
```yaml
annotations:
  prometheus.io/rule: PROMETHEUS_RULE_OR_DIRECT_QUERY
```  
for example:  
```yaml
annotations:
  prometheus.io/rule: memUsage|component,node_memory_active_bytes|instance,sum by (instance) (node_cpu_seconds_total)
```  

### Jenkins
```yaml
annotations:
  jenkins.io/job-full-name: JOB_PATH_IN_JENKINS
```  
for example:  
```yaml
annotations:
  jenkins.io/job-full-name: teamA/artistLookup-build
```  

### Azure DevOps
```yaml
annotations:
  dev.azure.com/project-repo: ADO_PROJECT/ADO_REPO
```  
for example:
```yaml
annotations:
  dev.azure.com/project-repo: my-project/my-repo
```  
### Vault
```yaml
annotations:
  vault.io/secrets-path: path/to/secrets
```  
for example:  
```yaml
annotations:
  vault.io/secrets-path: tdp/demo/sample/app-01
```
