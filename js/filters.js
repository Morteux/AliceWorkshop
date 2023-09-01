var filters = new Map();

function toggleFilter(filter_name, filter_function) {

    if(filters.has(filter_name)) {
        filters.delete(filter_name);
    } else {
        filters.set(filter_name, filter_function);
    }

}

