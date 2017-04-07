
export default function (obj) {
    console.log('def func');
};
export function each(obj, iterator, context) {
    console.log('def func1');
}

export {each as forEach};

// to import
//import _, { each } from 'utils';