# TDP Plugin Wrappers
In this repo you will find plugin wrappers built and tested for TAP 1.7 based on OSS backstage plugins. they have been tested against TAP 1.7 but are in alpha state. they are viable for POCing and demoing the TDP Configurator and how it can be extended

## Existing Wrappers
1. [Github Insights](./plugins/github-insights-wrapper)
2. [Harbor Frontend Wrapper](./plugins/harbor-plugin-wrapper)
3. [Harbor Backend Wrapper](./plugins/harbor-plugin-wrapper-backend)
4. [ChatGPT Frontend Wrapper](./plugins/chatgpt-wrapper)
5. [ChatGPT Backend Wrapper](./plugins/chatgpt-wrapper-backend)

## Published Wrappers
1. [Github Insights](https://www.npmjs.com/package/@vrabbi/github-insights-wrapper)
2. [Harbor Frontend Wrapper](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper)
3. [Harbor Backend Wrapper](https://www.npmjs.com/package/@vrabbi/harbor-plugin-wrapper-backend)
4. [ChatGPT Frontend Wrapper](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper)
5. [ChatGPT Backend Wrapper](https://www.npmjs.com/package/@vrabbi/chatgpt-wrapper-backend)

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
