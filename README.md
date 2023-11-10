# TDP Plugin Wrappers
In this repo you will find plugin wrappers built and tested for TAP 1.7 based on OSS backstage plugins. they have been tested against TAP 1.7 but are in alpha state. they are viable for POCing and demoing the TDP Configurator and how it can be extended.
  
An [example TDP Config file](./sample-tdp-config-file.yaml) is provided as well.  

## Existing Wrappers
| **Area**                  | **Integration**             | **Plugin Type**                                         | **Wrapper Code**                                                                            | **Source Plugin**                                                                                                                                     |
| ------------------------- | --------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SCM**                   | **Github Insights**         | **Frontend**                                            | [Wrapper Code](./plugins/github-insights-wrapper)                                           | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-insights/README.md)      |
| **SCM**                   | **Github Pull Requests**    | **Frontend**                                            | [Wrapper Code](./plugins/github-pull-requests-wrapper)                                      | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-pull-requests/README.md) |
| **SCM and CICD**          | **Github Actions**          | **Frontend**                                            | [Wrapper Code](./plugins/github-actions-wrapper)                                            | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/github-actions/README.md)                                             |
| **SCM**                   | **Github Issues**           | **Frontend**                                            | [Wrapper Code](./plugins/github-issues-wrapper)                                             | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/github-issues/README.md)                                              |
| **SCM and Security**      | **Github Securiy Insights** | **Frontend**                                            | [Wrapper Code](./plugins/security-insights-wrapper)                                         | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-security-insights/README.md)    |
| **SCM                     |  and CICD**                 | **Azure DevOps**                                        | **Frontend**                                                                                | [Wrapper Code](./plugins/azure-devops-wrapper)                                                                                                        |
|                           |                             | **Backend**                                             | [Wrapper Code](./plugins/azure-devops-wrapper-backend)                                      | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/azure-devops-backend/README.md)                                       |
| **CICD**                  | **Tekton**                  | **Frontend**                                            | [Wrapper Code](./plugins/tekton-wrapper)                                                    | [Source Plugin Repo](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/tekton/README.md)                                               |
| **CICD**                  | **Jenkins**                 | **Frontend**                                            | [Wrapper Code](./plugins/jenkins-wrapper)                                                   | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/jenkins/README.md)                                                    |
|                           |                             | **Backend**                                             | [Wrapper Code](./plugins/jenkins-wrapper-backend)                                           | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/jenkins-backend/README.md)                                            |
| **SCM**                   | **TODO**                    | **Frontend**                                            | [Wrapper Code](./plugins/todo-wrapper)                                                      | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/todo/README.md)                                                       |
|                           |                             | **Backend**                                             | [Wrapper Code](./plugins/todo-wrapper-backend)                                              | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/todo-backend/README.md)                                               |
| **Registry and Security** | **Harbor**                  | **Frontend**                                            | [Wrapper Code](./plugins/harbor-plugin-wrapper)                                             | [Source Plugin Repo](https://github.com/container-registry/backstage-plugin-harbor/blob/master/README.md)                                             |
|                           | **Backend**                 | [Wrapper Code](./plugins/harbor-plugin-wrapper-backend) | [Source Plugin Repo](https://github.com/container-registry/backstage-plugin-harbor-backend) | [Published Package](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper-backend)                                                              |
| **GitOps**                | **FluxCD**                  | **Frontend**                                            | [Wrapper Code](./plugins/flux-wrapper)                                                      | [Source Plugin Repo](https://github.com/weaveworks/weaveworks-backstage/blob/main/plugins/backstage-plugin-flux/README.md)                            |
| **Monitoring**            | **Grafana**                 | **Frontend**                                            | [Wrapper Code](./plugins/grafana-wrapper)                                                   | [Source Plugin Repo](https://github.com/K-Phoen/backstage-plugin-grafana)                                                                             |
| **Monitoring**            | **Prometheus**              | **Frontend**                                            | [Wrapper Code](./plugins/prometheus-wrapper)                                                | [Source Plugin Repo](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-prometheus/README.md)           |
| **Dev Tools**             | **Tech Radar**              | **Frontend**                                            | [Wrapper Code](./plugins/tech-radar-wrapper)                                                | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-radar/README.md)                                                 |
| **Monitoring**            | **Tech Insights**           | **Frontend**                                            | [Wrapper Code](./plugins/tech-insights-wrapper)                                             | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-insights/README.md)                                              |
|                           |                             | **Backend**                                             | [Wrapper Code](./plugins/tech-insights-wrapper-backend)                                     | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/tech-insights-backend/README.md)                                      |
| **Dev Tools**             | **ChatGPT**                 | **Frontend**                                            | [Wrapper Code](./plugins/chatgpt-wrapper)                                                   | [Source Plugin Repo](https://github.com/enfuse/backstage-chatgpt-plugin/blob/main/README.md)                                                          |
|                           |                             | **Backend**                                             | [Wrapper Code](./plugins/chatgpt-wrapper-backend)                                           | [Source Plugin Repo](https://github.com/enfuse/backstage-chatgpt-backend)                                                                             |
| **Monitoring**            | **K8sGPT**                  | **Frontend**                                            | [Wrapper Code](./plugins/k8s-gpt-wrapper)                                                   | [Source Plugin Repo](https://github.com/suxess-it/backstage-plugin-k8sgpt/blob/main/README.md)                                                        |
| **Dev Tools**             | **Toolbox**                 | **Frontend**                                            | [Wrapper Code](./plugins/dev-toolbox-wrapper)                                               | [Source Plugin Repo](https://github.com/drodil/backstage-plugin-toolbox/blob/main/README.md)                                                          |
| **Operations**            | **Backstage Dev Tools**     | **Frontend**                                            | [Wrapper Code](./plugins/backstage-devtools-wrapper)                                        | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/devtools/README.md)                                                   |
|                           |                             | **Backend**                                             | [Wrapper Code](./plugins/backstage-devtools-wrapper-backend)                                | [Source Plugin Repo](https://github.com/backstage/backstage/blob/master/plugins/devtools-backend/README.md)                                           |

  
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
