module.exports = {
	theme: {
		extend: {
			fontFamily: {
				salome: ['Salome', 'italic'],
				argesta_thin: ['Argesta', 'thin'],
				argesta_courant: ['Argesta', 'courant'],
				argesta_regular: ['Argesta', 'regular'],
				parking: ['Parking', 'courant'],
			},
		},
	},
	content: ['**/*.tsx'],
	daisyui: {
		themes: ['garden'],
	},
	plugins: [require('daisyui')],
};
