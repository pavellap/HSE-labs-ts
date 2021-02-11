import {formSample} from "./formData";

export const sum = (a: number, b: number) => {
    if ('development' === process.env.NODE_ENV) {
        console.log('boop');
    }
    return a + b;
};

/**
** Task: Поступают сведения о том, какие ученики из какой школы на сколько
 баллов сдали ЕГЭ. Требуется написать программу, которая выводит номера
 школ, где средний балл больше среднего по району.
* */

console.log(formSample())



