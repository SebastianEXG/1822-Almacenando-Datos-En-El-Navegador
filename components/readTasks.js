import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector('[data-list]')
   
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
    console.log(tasksList)

    dates.forEach((date) => {

        const dateMoment = moment(date, "DD/MM/YYYY")
        list.appendChild(dateElement(date))
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY")
            const diff = dateMoment.diff(taskDate)
            if(diff === 0) {
                list.appendChild(createTask(task))
            }
        
    });
});
};
    

    