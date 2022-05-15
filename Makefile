up:
	docker-compose up

down:
	docker-compose down --remove-orphans

stop:
	docker-compose stop

build:
	docker-compose build

admin:
	docker-compose run api python manage.py createsuperuser

test:
	docker-compose run api python manage.py test

migrations:
	docker-compose run api python manage.py makemigrations

migrate:
	docker-compose run api python manage.py migrate