docker build --no-cache -f SQL\Dockerfile.PostgreSql -t animals-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t animals-java/app ../../..
