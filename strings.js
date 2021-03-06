var STRINGS = {
	HEADER: {
		HEADING: {
			SV: "UB",
			EN: "UB"
		},
		SUBHEADING: {
			SV: "dArc",
			EN: "dArc"
		}
	},
	FOOTER: {
		TAGLINE: {
			SV: 'Utvecklas och underhålls av Digitala tjänster vid Göteborgs Universitetsbibliotek',
			EN: 'Developed and maintained by Digital Services at Gothenburg University Library'
		},
		EMAIL: {
			TITLE: 'itutvecklare@ub.gu.se',
			ADRESS: 'itutvecklare@ub.gu.se'
		},
		PRODUCTOWNER: {
			TITLE: {
				SV: "Produktägare",
				EN: "Product owner"
			},
			NAME: {
				SV: "Camilla Gillen",
				EN: "Camilla Gillen"
			}, 
			EMAIL:  'camilla.gillen@ub.gu.se'
		},
		COPYRIGHT: {
			SV: "Göteborgs Universitetsbibliotek",
			EN: "Gothenburg University Library"
		}
	},
	MAINMENU: {
		MENU_AUTHORITIES: {
			SV: "Auktoriteter",
			EN: "Authorities"
		},
		MENU_ARCHIVES: {
			SV: "Arkiv",
			EN: "Archive"
		},
		MENU_PERSONS: {
			SV: "Personer",
			EN: "Persons"
		},
		MENU_DISKS: {
			SV: "Diskar",
			EN: "Disks"
		}
	},
	BUTTON: {
		SAVE: {
			SV: "Spara",
			EN: "Save"
		},
		REMOVE: {
			SV: "Ta bort",
			EN: "Remove"
		},
		EDIT: {
			SV: 'Editera',
			EN: 'Edit'
		},
		CLOSE: {
			SV: 'Stäng',
			EN: 'Close'
		},
		CREATE: {
			SV: 'Skapa',
			EN: 'Create'
		},
		CREATE_AUTHORITY: {
			SV: 'Ny arkivbildare',
			EN: 'Create authority'
		},
		CREATE_ARCHIVE: {
			SV: 'Nytt arkiv',
			EN: 'Create archive'
		},
		CREATE_DISK: {
			SV: 'Ny disk',
			EN: 'Create disk'
		}
	},
	PAGES: {
		AUTHORITIES: {
			TITLE: {
				SV: "Auktoriteter",
				EN: "Authorities"
			}
		},
		AUTHORITY: {
			CREATE: {
				SV: "Ny auktoritet",
				EN: "New Authority"				
			},
			TITLE: {
				SV: "Auktoritet",
				EN: "Authority"
			}
		},
		PERSONS: {
			TITLE: {
				SV: "Personer",
				EN: "Persons"
			}
		},
		PERSON: {
			TITLE: {
				SV: "Person",
				EN: "Person"
			}
		},		
		ARCHIVES: {
			TITLE: {
				SV: "Välj ett arkiv i trädet till vänster",
				EN: "Select an archive in the tree to the left"
			}
		},
		ARCHIVE: {
			CREATE: {
				SV: "Nytt arkiv",
				EN: "New Archive"				
			},			
			TITLE: {
				SV: "Arkiv",
				EN: "Archive"
			}
		},
		DISKS: {
			TITLE: {
				SV: "Diskar",
				EN: "Disks"
			}
		},
		DISK: {
			CREATE: {
				SV: "Ny disk",
				EN: "New Disk"				
			},			
			TITLE: {
				SV: "Disk",
				EN: "Disk"
			}
		}
	},

	FIELDS: {
		ID: {
			SV: "ID",
			EN: "ID"					
		},
		PID: {
			SV: "PID",
			EN: "PID"					
		},
		TITLE: {
			SV: "Titel",
			EN: "Title"					
		},
		TYPE: {
			SV: "Typ",
			EN: "Type"					
		},
		ABSTRACT: {
			SV: "Abstract",
			EN: "Abstract"					
		},
		EXISTING_STARTDATE: {
			SV: "Födelseår",
			EN: "Birthyear"					
		},
		EXISTING_ENDDATE: {
			SV: "Dödsår",
			EN: "Deathyear"					
		},
		AUTHORIZED_FORENAME: {
			SV: "Förnamn",
			EN: "Forename"					
		},
		AUTHORIZED_SURNAME: {
			SV: "Efternamn",
			EN: "Surname"					
		},
		UNIT_TITLE: {
			ARCHIVE: {
			    SV: "Arkivnamn",
			    EN: "Unit Title"					
		    },
			DISK: {
			    SV: "Namn",
			    EN: "Unit Title"					
		    }
        },
		UNIT_DATE: {
			SV: "Datum",
			EN: "Date"					
		},
		UNIT_ID: {
			ARCHIVE: {
			    SV: "Arkivnummer",
			    EN: "Archive Number"					
		    },
			DISK: {
			    SV: "Nummer",
			    EN: "Unit ID"					
		    }				
		},		
		AUTHORITIES: {
			SV: "Arkivbildare",
			EN: "Authorites"					
		},
		ARCHIVES: {
			SV: "Arkiv",
			EN: "Archive"					
		},
		DISKS: {
			SV: "Diskar",
			EN: "Disks"					
		},
		DISK_IMAGES: {
			SV: "Diskinneh&aring;ll",
			EN: "Disk contents"					
		}
	},

	STATUSSTRINGS: {
		EDITING: {
			SV: "Editerar",
			EN: "Editing"
		}
	},

	ERRORS: {
		AUTHORITY: {
			CREATE_GENERAL: {
				SV: "Det gick inte att spara auktoriteten.",
				EN: "Error creating authority."
			},
			REMOVE_GENERAL: {
				SV: "Det gick inte att ta bort auktoriteten.",
				EN: "Error removing authority."
			}
		},
		ARCHIVE: {
			CREATE_GENERAL: {
				SV: "Det gick inte att spara arkivet.",
				EN: "Error creating archive."
			},
			REMOVE_GENERAL: {
				SV: "Det gick inte att ta bort arkivet.",
				EN: "Error removing archive."
			}
		},
		PERSON: {
			CREATE_GENERAL: {
				SV: "Det gick inte att spara personauktoriteten.",
				EN: "Error creating person."
			},
			REMOVE_GENERAL: {
				SV: "Det gick inte att ta bort personauktoritet.",
				EN: "Error removing person."
			}
		},
		DISK: {
			CREATE_GENERAL: {
				SV: "Det gick inte att spara disken.",
				EN: "Error creating disk."
			},
			REMOVE_GENERAL: {
				SV: "Det gick inte att ta bort disken.",
				EN: "Error removing disk."
			}
		}
	}
}
