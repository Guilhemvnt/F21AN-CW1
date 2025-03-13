# F21AN: Coursework Proposal Submission

## Group 1: Guilhem Vinet, Rémi MERGEN, Valentin Gallerand

## Idea for the Coursework

We thought about a complex project that reproduces a real attack scenario to explore multiple
fields of cybersecurity with a step-by-step approach.

We use a web platform that simulates an internal platform of a company (the platform already
exists, so we don't need to code it for the project).

### Scenario

We find an exposed internal platform of a company on the web. This platform requires user
access, and we can't create an account because it's managed by the IT administrator of the
company.

The goal is to take control of the platform by gaining root access to the web server. To do so,
we plan to use social engineering first to gain user access to the web platform.

After gaining access as a user, we want to escalate to admin privileges. To achieve that, we will
look for a remote code execution (RCE) vulnerability that allows us to get a reverse shell on the
web server.

The final part is to perform privilege escalation to obtain root privileges on the web server.

---

## Social Engineering

**Objective:** Steal user credentials to access the platform.

- Use social media to identify employees (LinkedIn and Instagram).
- Create a spear-phishing email for employees with a link to a fake internal platform to steal
    credentials. When the credentials are entered by the employee, the fake website will display an
    error and redirect to the real platform to avoid suspicion.

---

## Access and Web Pentesting

The user access is limited, allowing only minimal interaction.

**Objective:** Gain control of the main server hosting the internal website (and potentially other
websites or databases).

- Test various known techniques (SQLi, XSS, deprecated npm packages with security issues).
- Discover a Remote Code Execution (RCE) vulnerability.

---

## Exploiting Vulnerabilities

- The RCE allows us to obtain a reverse shell.
- **Next goal:** Perform privilege escalation to gain root access.
    - Use tools like Metasploit and LinPEAS.sh.
    - Possibly explore dependency confusion to identify vulnerabilities.

---
## Authors
- [remi.mergen@epitech.eu](mailto:remi.mergen@epitech.eu)
- [guilhem.vinet@epitech.eu](mailto:guilhem.vinet@epitech.eu)
- [valentin.gallerand@epiecth.eu](mailto:valentin.gallerand@epiecth.eu)
