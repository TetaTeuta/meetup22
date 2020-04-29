import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEventsDetails.feature');

defineFeature(feature, test => {

});