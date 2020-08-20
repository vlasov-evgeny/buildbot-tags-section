const START_ORDER = 5;
const SECTION_NAME_PREFIX = 'tags_section_plugin';

class FiltersState {
    constructor($stateProvider, glMenuServiceProvider, config) {
        if (!config.plugins.tags_section_plugin.sections) return;

        config.plugins.tags_section_plugin.sections.forEach((section, index) => {
            const sectionName = `${SECTION_NAME_PREFIX}_${section.name}`
            glMenuServiceProvider.addGroup({
                name: sectionName,
                caption: section.name,
                icon: 'tags',
                order: START_ORDER + index,
            });

            section.filters.forEach((filter, index) => {
                const state = {
                    controller: "FiltersController",
                    name: `${sectionName}_filter_${index}`,
                    data: {
                        group: sectionName,
                        caption: filter.name,
                        tags: filter.tags,
                    }
                };
                $stateProvider.state(state);
            });
        });
    }
}

angular
    .module('tags_section_plugin', [])
    .config(['$stateProvider', 'glMenuServiceProvider', 'config', FiltersState]);
