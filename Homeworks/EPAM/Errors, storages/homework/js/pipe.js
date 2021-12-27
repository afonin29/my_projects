function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {
	try {
		funcs.forEach((func, i) => {
			if (isFunction(func)) {
				value = func(value);
			} else {
				throw new Error(`Provided argument at position ${i} is not a function!`);
			}
		});
	} catch (err) {
		return err;
	}
	return value;
};