# Real Estate Care
## Introductie
In dit project ben ik stapgewijs toe gaan werken naar een Single Page (Mobile) Application, die het leven van de Real Estate Care inspecteurs eenvoudiger maakt. Deze applicatie helpt ze met hun dagelijkse werkzaamheden. De inspecteurs kunnen rapportages op lokatie invullen en voorgaande rapportages bekijken. Ze hebben toegang tot belangrijke documententatie en kunnen hun voorkeuren aanpassen in de instellingen.

> Middels integratie van intuitieve UI-elementen zoals sprekende iconen, titels en simpele navigatie; is het zelfs voor een leek makkelijk om digitaal vaardig te worden in deze applicatie.

## Hoe werkt de applicatie?
### Inloggen
De applicatie is eenvoudig te doorlopen. Je kunt in deze simulatie inloggen met de volgende gegevens (in de officiele lancering zullen deze gegevens uiteraard niet worden gedeeld):
- Gebruikersnaam: werknemer1
- Wachtwoord: werknemer1
- 2FA code: 12345

### Home-scherm
Vanuit het home-scherm kun je gemakkelijk navigeren naar de volgende onderdelen:
- Toegewezen rapportages
- Uitgevoerde rapportages
- Kennisbase
- Instellingen

### Toegewezen rapportages
Hier kun je een rapportage invullen als je bijvoorbeeld op lokatie bent aangekomen. Je kunt aanvinken wat op de lokatie van toepassing is, bijvoorbeeld het opnemen van schade. De desbetreffende selectie kun je invullen met relevante informatie. Eventueel kun je ook gemaakte foto's toevoegen aan het dossier. 

Wanneer je klaar bent verzend je gemakkelijk de rapportage met de 'verzend rapportage'-knop. Je zal een melding ontvangen op je scherm wanneer de rapportage succesvol verzonden is. In dit geval is de rapportage succesvol naar de database gestuurd.

### Uitgevoerde rapportages
Hier kun je uitgevoerde rapportages bekijken. Je krijgt zo een goed overzicht van dat wat er is ingevuld door jou en je collega's. Indien je bijvoorbeeld een fout hebt gemaakt bij een eerdere rapportage kun je deze ook updaten, door op de knop 'bewerken' te drukken (deze feature is nog niet geïmplementeerd).

### Kennisbase
Hier kun je een overzicht krijgen van alle belangrijke documentatie. Denk bijvoorbeeld aan de brandveiligheid protocol. Klik op de 'open'-knop om de bestanden te bekijken.

### Instellingen
Wil je je instellingen aanpassen? Bijvoorbeeld omdat je een nieuwe e-mail adres gebruikt, je een nieuwe zakelijke foto van jezelf wilt laten zien of omdat je je systeem voorkeuren wilt updaten. Alle benodigde instellingen vind je hier. Vul simpelweg de gegevens in en/of druk op de knoppen om je voorkeuren in te voeren en sla de instellingen op middels de 'instellingen opslaan'-knop. Piece of cake!

## Proces verantwoording
### Globaal doorlopen proces
Ik heb me zo veel mogelijk geprobeerd te houden aan de lijnen die vanuit LOI zijn uitgezet, het leek mij de meest handige manier om tot een 'zuiver' eindproduct te komen. Ik heb de tussenopdrachten gemaakt en veel geoefend met het boek van Peter Kassenaar, tevens wat (crash) courses gevolgd van onder andere Vue Mastery. 

De eindopdracht heb ik stap voor stap doorlopen. Zo ben ik eigenlijk component voor compoonent gaan uitwerken. De opzet had ik al klaar staan en ook grote delen van de router had ik al in orde gebracht. Veel kwam dus aan op de invulling van componenten als toegewezen rapportages - instellingen. Ik heb alles veelal middels trail and error weten uit te werken. Zo heb ik bij toegewezen rapportages bijvoorbeeld een lokale server aangemaakt om hier data naar te kunnen pushen (gezien de JSON REST server hier ongeschikt voor was). Dit gaf mij de mogelijkheid om de werking van dit component (en subcomponenten) goed te ontwikkelen. Ik heb deze wel weer terug gezet naar de externe JSON server om aan de 'requirements' te voldoen.

De applicatie heb ik grondig getest op meerdere browsers en 'simulatie devices', alles is hier voor mij naar wens en overeenkomstig met de opdracht uitgevoerd.

### Verbeteringen
Zoals ik eerder vermelde is er een onderdeel niet geïmplementeerd wat ik telkens door complexiteit niet aan de praat kreeg (of slechts deels). Waardoor het naar mijn idee beter was om dit achterwegen te laten. Hierbij praat ik over het bewerken van een inspectie in het onderdeel: uitgevoerde rapportages. Ik vond het vooral lastig omdat ik alles in subcomponenten had opgedeeld, waardoor het telkens op een onderdeel misliep. Mogelijk had ik het wel op termijn aan de praat kunnen krijgen, echter leek de huidige staat van de applicatie mij voldoende stof om mij goed te beoordelen op mijn competenties (zeker met de beoordelingsaspecten in acht genomen).

## Security, usability, accessibility, style guides & best practices
### Security
Ik heb rekening gehouden met veiligheid door in de applicatie bijvoorbeeld enkel vertrouwde packages/modules te gebruiken. Ook heb ik bijvoorbeeld gebruik gemaakt veilige data-binding (en geen gebruik van v-html, wat een risico kan vormen bij bijvoorbeeld XSS-aanvallen).

### Usability & accessibility
Het is natuurlijk tot zekere hoogte lastig om zelf objectief te kijken naar usability en accessibility, dit heb ik in mijn voorgaande studie als UX-designer zeker ondervonden. Toch zijn er gelukkig goede resources waaraan je tot op een bepaalde hoogte kunt meten of een ontwerp aan de eisen voldoet. Wat ik zelf kan zeggen over de applicatie is:
- De applicatie is consistent in uitvoering; zo is de layout, kleurgebruik, iconen, etc in de gehele applicatie globaal hetzelfde. Waardoor de gebruiker een consistente ervaring krijgt.
- De applicatie is intuitief/eenvoudig in gebruik; gezien het gebruik maakt van veel elementen die in vrijwel alle applicaties naar voren komt. Denk hierbij aan de navigatie-bar onderin, waarmee je naar alle gewenste pagina's kunt navigeren. De iconen die overeenkomstig zijn met de 'norm', denk hierbij aan een 'brief'-icoon voor mail, 'slot'-icoon voor wachtwoord, etc. Tot slot ook de knoppen die een opvallende kleur hebben wat de aandacht van de gebruiker trekt, met een duidelijke tekst wat een handeling inhoud.
- De applicatie weergave is inclusief; door hoge contrasten te gebruiken en veel tekstuele uitleg zal dit bijvoorbeeld ook voor slechtzienden of kleurblinden leesbaar kunnen zijn. Een voorbeeld is de home-pagina waarbij grote iconen worden gebruikt met simpele doeltreffende koppen. Een ander voorbeeld is de kennisbase, waar alle items onder elkaar met informatie en een grote knop 'open'.
- De applicatie is niet specifiek ingericht of geoptimaliseerd voor blinden/minder validen die bijvoorbeeld gebruik maken van toetsenbord navigatie. Ook kunnen bepaalde termen voor mensen lastig begrijpbaar zijn, vooral vakjargon gerelateerde termen of een dergelijk term als 'dark mode'.

### Style guides & best practices
Wederom is het deels objectief om dit van mezelf te beoordelen. In veel gevallen heb ik getracht om vooral eenduidig in uitvoering te zijn; van document-opmaak tot naamgeving, zelfs in uitlijning van code. Een aantal zaken die ik kort kan belichten zijn:
- Het gebruik van :key in een for-loop; voor een correcte werking (DOM & UI).
- Het gebruik van data als function (data()); voor een correcte werking.
- Het gebruik van style scoping; voor een correcte werking.
- Het samenvoegen van sub-components in een map; voor een duidelijkere structuur.
- Het geven van duidelijke namen; ofwel overeenkomstig met de 'norm' (e.g. index.js), ofwel overeenkomstig met het 'doel' van een component (e.g. Login.vue -> om in te loggen).