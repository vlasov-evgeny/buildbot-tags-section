class FiltersController {
    constructor($window, $state) {
        const tagsParams = $state.current.data.tags.map(tag => `tags=${encodeURIComponent(tag)}`).join('&');
        $window.location.href = `/#/builders?${tagsParams}`;
    }
}

angular
    .module('tags_section_plugin')
    .controller('FiltersController', ['$window', '$state', FiltersController]);
