
/**
 * @Entity Modelo de entidad para una enfermedad
*/
export class Disease {
    id : number;
    name : string;
    description: string;
    information : string;
    relatedLinks : string;
    exams : string;
    treatments : string;

    constructor(id: number, description: string, information: string, relatedLinks: string, exams: string, treatments: string, name: string) {
        this.id = id;
        this.description = description;
        this.information = information;
        this.relatedLinks = relatedLinks;
        this.exams = exams;
        this.treatments = treatments;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getInformation(): string {
        return this.information;
    }

    public setInformation(information: string): void {
        this.information = information;
    }

    public getRelatedLinks(): string {
        return this.relatedLinks;
    }

    public setRelatedLinks(relatedLinks: string): void {
        this.relatedLinks = relatedLinks;
    }

    public getExams(): string {
        return this.exams;
    }

    public setExams(exams: string): void {
        this.exams = exams;
    }

    public getTreatments(): string {
        return this.treatments;
    }

    public setTreatments(treatments: string): void {
        this.treatments = treatments;
    }
}