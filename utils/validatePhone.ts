// const phoneRegExp =
// 	/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/gm;
// const phoneRegExp =
// 	/(\+62 ((\d{3}(\d{3,})(\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+\d+)|\d+/gm;

const phoneRegExp = /^(?:\+62)[2-9]\d{7,11}$/;

export const validatePhone = (phone: string) => {
	if (phoneRegExp.test(phone)) {
		// Phone number is valid
		return true;
	} else {
		// Phone number is invalid
		return false;
	}
};
