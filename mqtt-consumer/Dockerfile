FROM php:cli

# installs unzip and git, necessary to run php composer
RUN apt-get update && apt-get install -y \
    unzip \
    git

# downloads latest php composer image
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN mkdir /opt/mqtt-consumer
WORKDIR /opt/mqtt-consumer
COPY src/ ./

# runs php composer
RUN composer install

ENTRYPOINT ["/bin/sh", "-c" , "echo 192.168.56.14   k3s.its >> /etc/hosts && exec /usr/local/bin/php /opt/mqtt-consumer/consumer.php" ]
