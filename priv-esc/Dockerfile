FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    vim \
    net-tools && \
    mkdir /var/run/sshd

RUN useradd -m -s /bin/bash user && echo "user:1234" | chpasswd
RUN echo "root:rootpasswd" | chpasswd
RUN sed -i 's/^#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config
RUN service ssh restart

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
