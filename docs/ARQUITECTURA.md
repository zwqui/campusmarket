# Arquitectura en AWS

## Componentes

| Servicio | Para qué sirve | Por qué lo usamos |
|---|---|---|
| Dominio y DNS | Apunta el nombre de la página al balanceador | La rúbrica pide un dominio propio |
| Application Load Balancer (`alb-campusmarket`) | Recibe las visitas y las reparte entre los servidores | Si un servidor falla, las visitas van al otro |
| Target Group (`tg-campusmarket`) | Lista de servidores que reciben visitas por el puerto 3000 | Visita `/api/health` para saber si cada servidor está vivo |
| Auto Scaling Group (`asg-campusmarket`) | Mantiene 2 servidores, uno en us-east-1a y otro en us-east-1b | Si uno se cae, crea otro |
| Launch Template (`lt-campusmarket`) | Receta para crear cada servidor | Todos los servidores nacen iguales |
| EC2 (t3.micro) | Servidor que ejecuta Next.js | Aquí corre la aplicación |
| Security Groups (`alb-sg` y `ec2-sg`) | `alb-sg` deja entrar por el puerto 80; `ec2-sg` solo acepta visitas del balanceador | Los servidores no quedan expuestos a internet |
| Amazon S3 | Guarda el `app.zip` de cada versión | Los servidores nuevos descargan de aquí la versión |
| LabInstanceProfile | Da permiso a los servidores para leer S3 | Evita guardar claves dentro de los servidores |
| GitHub Actions | Compila, sube a S3 y reemplaza los servidores | El despliegue es automático |

## Cómo viaja una visita

1. La persona abre el dominio propio.
2. El DNS la manda al Application Load Balancer.
3. El balanceador elige un servidor sano del Auto Scaling Group.
4. Next.js responde. Si la página es privada, `proxy.ts` revisa la cookie y, si no hay, manda al login.

## Cómo se despliega una versión nueva

1. Se hace merge a `main`.
2. GitHub Actions ejecuta el job **build**: compila y crea `app.zip`.
3. El job **deploy** sube `app.zip` a S3 y le pide al Auto Scaling Group que reemplace los servidores.
4. Cada servidor nuevo descarga `app.zip` de S3 al arrancar y lo ejecuta.
5. El job **verify** visita `/api/health` para confirmar que todo funciona.