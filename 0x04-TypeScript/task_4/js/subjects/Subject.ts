namespace Subjects {
    export class Subject {
        private _teacher: Teacher | undefined;
        set teacher(newTeacher: Teacher) {
            this._teacher = newTeacher;
        }
        get teacher() {
            return this._teacher;
        }
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}