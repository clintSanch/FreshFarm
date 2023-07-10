
import { commonEnvironment } from "./environment.common";

const productionEnvironment: Partial<typeof commonEnvironment> = {
  production: true,
  environmentName: 'Production'
};

export const environment = Object.assign(commonEnvironment, productionEnvironment);
