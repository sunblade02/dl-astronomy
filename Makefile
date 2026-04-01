# —— Docker 🐳 ————————

build:
	docker compose build

start:
	docker compose up -d

stop:
	docker compose down

restart: stop start

# —— Development 🔧 ———————————

start-dev:
	docker run -d --rm \
		--network dl-astronomy_default \
		-e TERM=xterm-256color \
		-u $(shell id -u):$(shell id -g) \
		-p 3000:3000 \
		-v $(shell pwd)/frontend:/app \
		-w /app \
		--name astronomia-dev \
		node:slim \
		tail -f /dev/null

stop-dev:
	docker stop astronomia-dev

bash-dev:
	docker exec -ti astronomia-dev bash