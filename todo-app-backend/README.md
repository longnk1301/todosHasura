To run app, let's follow below:

- Step 1: Get the docker-compose file
# in a new directory run
`wget https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml`
# or run
`curl https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml -o docker-compose.yml`

- Step 2: Run docker compose
`docker-compose up`

- Step: Launch console
`localhost:8080`