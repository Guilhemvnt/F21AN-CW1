sudo docker compose down
sudo docker compose up
sudo docker ps

# sudo docker logs back-end-postgresdb-1
# sudo docker logs back-end-app-1

# sudo service postgresql start
# sudo su - postgres
# inside the shell
# psql
# psql -h localhost -U root -d celia
# \c celia
# \d

# sudo docker run -d --name g -p 5432:5432 back-end-db
# sudo docker rm -f back
# sudo docker exec -it back bash
# sudo docker start back
# sudo lsof -i :5432
# sudo docker network inspect network backend

# setup vm 

# set up vm
# To access your app running on http://localhost:3000 on the VM from your local machine, you'll need to make the app accessible externally. Here's how you can do it:

# 1. Ensure Port 3000 is Open on the VM
# Firewall Rules: Ensure port 3000 is open in the VM's firewall.
# For Ubuntu-based systems with UFW enabled, run:
# bash
# Copy
# Edit
# sudo ufw allow 3000
# sudo ufw reload
# If your VM is hosted on a cloud platform (AWS, GCP, Azure, etc.), ensure the security group/firewall allows inbound traffic on port 3000.
# 2. Use the VM's Public IP
# Find the VM's public IP address:
# bash
# Copy
# Edit
# curl ifconfig.me
# Access the app by replacing localhost with the public IP in your browser:
# arduino
# Copy
# Edit
# http://<your-vm-ip>:3000/
# 3. Map localhost:3000 to Your Local Machine
# If you'd like to access the app using http://localhost:3000 on your local machine, you can use SSH port forwarding.

# On your local machine, run:

# bash
# Copy
# Edit
# ssh -L 3000:localhost:3000 user@your-vm-ip
# This command forwards port 3000 on your local machine to port 3000 on the VM.

# Now, open your browser on your local machine and visit:

# arduino
# Copy
# Edit
# http://localhost:3000/
# 4. Optional: Use a Domain or Subdomain
# If you'd like a more user-friendly URL, you can set up a domain or subdomain that points to your VM's IP and configure a reverse proxy (like NGINX). Let me know if you need help with this.

# Let me know which method you'd like to try, and I can guide you further!