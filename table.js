var app = new Vue({
	el: '#app',
	data: {
		
		filter: '',
		people: [],
	},
	computed : {

		filteredPeople: function () {

			var filter = this.filter;
			if (this.filter && this.filter != '') {

				return this.people.filter(function (person) {

					return Object
						.keys(person)
						.some(function (key) {
							return person[key]
								.toString()
								.toLowerCase()
								.includes(filter.toLowerCase());
						});
				});
			}

			return this.people;
		},
	},
	mounted: function () {
        var self = this;
    		$.getJSON('table.json', function (data) {
          self.people = data;
        });
	}
});