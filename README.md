A continuación tienes el índice de los bloques de código correspondientes a cada archivo del proyecto, ordenados exactamente según la estructura de directorios para que puedas copiarlos y pegarlos directamente:

1. Configuración Raíz y Herramientas
package.json (Bloque 1 de la respuesta larga)

tsconfig.json (Bloque 2)

vite.config.ts (Bloque 3)

eslint.config.js (Bloque 4)

prettier.config.js (Bloque 5)

.gitignore (Bloque 6)

.env.example (Bloque 7)

README.md (Bloque 8)

LICENSE (Bloque 9)

2. Capa de Dominio (src/domain/)
src/domain/valueObjects/WorkOrderStateMachine.ts

src/domain/entities/Asset.ts

src/domain/entities/WorkOrder.ts

src/domain/services/KPICalculatorService.ts

3. Capa de Aplicación (src/application/)
src/types/index.ts

src/application/dtos/WorkOrderDTO.ts

src/application/mappers/WorkOrderMapper.ts

src/application/services/RBACGuard.ts

src/application/services/AuditService.ts

src/application/cqrs/CMMSQueryHandler.ts

src/application/cqrs/CMMSCommandHandler.ts

4. Capa de Infraestructura (src/infrastructure/)
src/infrastructure/repositories/ICMMSRepository.ts

src/infrastructure/repositories/SupabaseCMMSRepository.ts

src/infrastructure/client/supabaseClient.ts

5. Capa de Presentación (src/presentation/)
src/presentation/context/CMMSContext.tsx

src/presentation/hooks/useCMMSEnterprisePro.ts

src/presentation/components/CMMSProductionDashboard.tsx

src/App.tsx

src/main.tsx

src/index.css

6. Base de Datos y Supabase (supabase/)
supabase/migrations/20260804000000_init_cmms_schema.sql

supabase/policies/rls_policies.sql

supabase/rpc/atomic_update_ot_status.sql

7. Pruebas Automatizadas (tests/)
tests/WorkOrderStateMachine.test.ts

tests/KPICalculatorService.test.ts
