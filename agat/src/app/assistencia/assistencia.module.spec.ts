import { AssistenciaModule } from './assistencia.module';

describe('AssistenciaModule', () => {
  let assistenciaModule: AssistenciaModule;

  beforeEach(() => {
    assistenciaModule = new AssistenciaModule();
  });

  it('should create an instance', () => {
    expect(assistenciaModule).toBeTruthy();
  });
});
