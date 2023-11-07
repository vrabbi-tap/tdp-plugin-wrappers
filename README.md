# TDP Plugin Wrappers
In this repo you will find plugin wrappers built and tested for TAP 1.7 based on OSS backstage plugins. they have been tested against TAP 1.7 but are in alpha state. they are viable for POCing and demoing the TDP Configurator and how it can be extended.
  
An [example TDP Config file](./sample-tdp-config-file.yaml) is provided as well.  

## Existing Wrappers
1. [Github Insights](./plugins/github-insights-wrapper) - [Source Plugin](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-insights/README.md)
2. [Github Pull Requests](./plugins/github-pull-requests-wrapper) - [Source Plugin](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-pull-requests/README.md)
3. [Github Actions](./plugins/github-actions-wrapper) - [Source Plugin](https://github.com/backstage/backstage/blob/master/plugins/github-actions/README.md)
4. [Todo Frontend](./plugins/todo-wrapper) - [Source Plugin](https://github.com/backstage/backstage/blob/master/plugins/todo/README.md)
5. [Todo Backend](./plugins/todo-wrapper-backend) - [Source Plugin](https://github.com/backstage/backstage/blob/master/plugins/todo-backend/README.md)
6. [Harbor Frontend](./plugins/harbor-plugin-wrapper) - [Source Plugin](https://github.com/container-registry/backstage-plugin-harbor/blob/master/README.md)
7. [Harbor Backend](./plugins/harbor-plugin-wrapper-backend) - [Source Plugin](https://github.com/container-registry/backstage-plugin-harbor-backend)
8. [FluxCD](./plugins/flux-wrapper) - [Source Plugin](https://github.com/weaveworks/weaveworks-backstage/blob/main/plugins/backstage-plugin-flux/README.md)
9. [Tekton](./plugins/tekton-wrapper) - [Source Plugin](https://github.com/janus-idp/backstage-plugins/blob/main/plugins/tekton/README.md)
10. [ChatGPT Frontend](./plugins/chatgpt-wrapper) - [Source Plugin](https://github.com/enfuse/backstage-chatgpt-plugin/blob/main/README.md)
11. [ChatGPT Backend](./plugins/chatgpt-wrapper-backend) - [Source Plugin](https://github.com/enfuse/backstage-chatgpt-backend)
12. [Developer Toolbox](./plugins/dev-toolbox-wrapper) - [Source Plugin](https://github.com/drodil/backstage-plugin-toolbox/blob/main/README.md)
  
## Published Wrappers
1. [Github Insights](https://www.npmjs.com/package/@vrabbi/github-insights-wrapper)
2. [Github Pull Requests](https://www.npmjs.com/package/@vrabbi/github-pull-requests-wrapper)
3. [Github Actions](https://www.npmjs.com/package/@vrabbi/github-actions-wrapper)
4. [Todo Frontend](https://www.npmjs.com/package/@vrabbi/todo-wrapper)
5. [Todo Backend](https://www.npmjs.com/package/@vrabbi/todo-wrapper-backend) 
6. [Harbor Frontend](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper)
7. [Harbor Backend](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper-backend)
8. [FluxCD](https://www.npmjs.com/package/@vrabbi/flux-wrapper)
9. [Tekton Pipelines](https://www.npmjs.com/package/@vrabbi/tekton-wrapper)
10. [ChatGPT Frontend](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper)
11. [ChatGPT Backend](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper-backend)
12. [Developer Toolbox](https://www.npmjs.com/package/@vrabbi/dev-toolbox-wrapper)
  
## Planned Wrappers
1. ArgoCD
2. Kafka
3. ElasticSearch
4. KubeCost
5. Tech Radar
  
## Plugins With Needed Config In TAP Values:
### Github Insights, Github Actions, Github Pull Requests
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


## Annotations on catalog-info.yaml files
### Github Insights, Github Actions, Github Pull Requests
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
