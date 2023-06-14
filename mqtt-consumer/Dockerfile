FROM php:cli

RUN mkdir /opt/mqtt-consumer
COPY src/ /opt/mqtt-consumer/

ENTRYPOINT ["/bin/sh", "-c" , "echo 192.168.56.14   k3s.its >> /etc/hosts && exec /usr/local/bin/php /opt/mqtt-consumer/consumer.php" ]
