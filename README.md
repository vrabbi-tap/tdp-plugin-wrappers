# TDP Plugin Wrappers
In this repo you will find plugin wrappers built and tested for TAP 1.7 based on OSS backstage plugins. they have been tested against TAP 1.7 but are in alpha state. they are viable for POCing and demoing the TDP Configurator and how it can be extended

## Existing Wrappers
1. [Github Insights Wrapper](./plugins/github-insights-wrapper) - [Source Plugin](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-insights/README.md)
2. [Harbor Frontend Wrapper](./plugins/harbor-plugin-wrapper) - [Source Plugin](https://github.com/container-registry/backstage-plugin-harbor/blob/master/README.md)
3. [Harbor Backend Wrapper](./plugins/harbor-plugin-wrapper-backend) - [Source Plugin](https://github.com/container-registry/backstage-plugin-harbor-backend)
4. [ChatGPT Frontend Wrapper](./plugins/chatgpt-wrapper) - [Source Plugin](https://github.com/enfuse/backstage-chatgpt-plugin/blob/main/README.md)
5. [ChatGPT Backend Wrapper](./plugins/chatgpt-wrapper-backend) - [Source Plugin](https://github.com/enfuse/backstage-chatgpt-backend)
6. [Developer Toolbox Wrapper](./plugins/dev-toolbox-wrapper) - [Source Plugin](https://github.com/drodil/backstage-plugin-toolbox/blob/main/README.md)
7. [Github Pull Requests Wrapper](./plugins/github-pull-requests-wrapper) - [Source Plugin](https://github.com/RoadieHQ/roadie-backstage-plugins/blob/main/plugins/frontend/backstage-plugin-github-pull-requests/README.md)

## Published Wrappers
1. [Github Insights](https://www.npmjs.com/package/@vrabbi/github-insights-wrapper)
2. [Harbor Frontend Wrapper](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper)
3. [Harbor Backend Wrapper](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper-backend)
4. [ChatGPT Frontend Wrapper](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper)
5. [ChatGPT Backend Wrapper](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper-backend)
6. [Developer Toolbox Wrapper](https://www.npmjs.com/package/@vrabbi/dev-toolbox-wrapper)
7. [Github Pull Requests Wrapper](https://www.npmjs.com/package/@vrabbi/github-pull-requests-wrapper)

## Needed config in TAP Values:
### Github Insights
Nothing is needed
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
### Developer Toolbox
Nothing is needed  
### Github Pull Requests
Nothing is needed

## Annotations on catalog-info.yaml files
### Github Insights
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
### Github Pull Requests
```yaml
annotations:
  github.com/project-slug: REPO_SLUG
```
for example:
```yaml
annotations:
  github.com/project-slug: vrabbi/spring-petclinic
```  

