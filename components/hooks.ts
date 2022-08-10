import { useState } from "react";

export const useMultiselectDiet = (initialValue: string[]) => {
	const [selectedDiet, setSelectedDiet] = useState<string[]>(initialValue);

	const onChangeDiet = (event: React.ChangeEvent<HTMLInputElement>) => {
		const callString = "&diet=";
		const value = event.target.value;
		const index = selectedDiet.indexOf(value);
		if (index > -1) {
			setSelectedDiet([...selectedDiet.slice(0, index), ...selectedDiet.slice(index + 1)]);
		} else {
			setSelectedDiet([...selectedDiet, ...[value]]);
		}
	};

	const isSelectedDiet = (value: string) => {
		return selectedDiet.includes(value);
	};

	return { selectedDiet, isSelectedDiet, onChangeDiet };
};

export const useMultiselectHealth = (initialValue: string[]) => {
	const [selectedHealth, setSelectedHealth] = useState<string[]>(initialValue);

	const onChangeHealth = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const index = selectedHealth.indexOf(value);
		if (index > -1) {
			setSelectedHealth([...selectedHealth.slice(0, index), ...selectedHealth.slice(index + 1)]);
		} else {
			setSelectedHealth([...selectedHealth, ...[value]]);
		}
	};

	const isSelectedHealth = (value: string) => {
		return selectedHealth.includes(value);
	};

	return { selectedHealth, isSelectedHealth, onChangeHealth };
};

export const useMultiselectCuisine = (initialValue: string[]) => {
	const [selectedCuisine, setSelectedCuisine] = useState<string[]>(initialValue);

	const onChangeCuisine = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const index = selectedCuisine.indexOf(value);
		if (index > -1) {
			setSelectedCuisine([...selectedCuisine.slice(0, index), ...selectedCuisine.slice(index + 1)]);
		} else {
			setSelectedCuisine([...selectedCuisine, ...[value]]);
		}
	};

	const isSelectedCuisine = (value: string) => {
		return selectedCuisine.includes(value);
	};

	return { selectedCuisine, isSelectedCuisine, onChangeCuisine };
};

export const useMultiselectMeal = (initialValue: string[]) => {
	const [selectedMeal, setSelectedMeal] = useState<string[]>(initialValue);

	const onChangeMeal = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const index = selectedMeal.indexOf(value);
		if (index > -1) {
			setSelectedMeal([...selectedMeal.slice(0, index), ...selectedMeal.slice(index + 1)]);
		} else {
			setSelectedMeal([...selectedMeal, ...[value]]);
		}
	};

	const isSelectedMeal = (value: string) => {
		return selectedMeal.includes(value);
	};

	return { selectedMeal, isSelectedMeal, onChangeMeal };
};