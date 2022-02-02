class Personal{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }

    save(){
        console.log(`Personal saved: ${this.name} `);
    }
}
const personal = new Personal("Ezgi", "Safçı");
personal.save();
personal.name = "Ezgi";


