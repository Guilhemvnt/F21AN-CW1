FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    vim \
    net-tools \
    python3 \
    cron

RUN useradd -m -s /bin/bash user && echo "user:1234" | chpasswd
RUN echo "root:rootpasswd" | chpasswd

RUN echo "*/2 * * * * root PYTHONPATH=/tmp/ python3 /root/script.py" >> /etc/crontab
RUN echo "my password if forgot it: rootpasswd" > /root/toremember.txt && chmod 600 /root/toremember.txt
RUN echo "import random" > /root/script.py && \
    echo "print(random.randint(1, 100))" >> /root/script.py && \
    chmod 644 /root/script.py
RUN chmod o+x /root && chmod 644 /root/script.py

RUN sed -i 's/^#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config

RUN service ssh restart

EXPOSE 22

CMD service cron start && /usr/sbin/sshd -D
