FROM php:7.4-apache

COPY conf/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

COPY src/ /var/www/
RUN chown -R www-data:www-data /var/www

CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]