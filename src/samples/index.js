import {inject} from 'aurelia-framework';
import {Registry} from 'shared/registry';
import { ComponentService } from '../shared/component-service';

@inject(Registry, ComponentService)
export class Index {

  constructor(registry, componentService) {
    this.registry = registry;
    this.componentService = componentService;
    this.routerConfig = componentService.getRouterConfig(true);
  }
  configureRouter(config, router) {
    this.routerConfig.unshift({ name: 'default', route: '', redirect: 'grid' });
    config.map(this.routerConfig);
    this.router = router;
  }
}
