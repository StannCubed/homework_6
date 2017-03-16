var topics = ["Playstation", "Xbox", "Nintendo", "Sega", "Ubisoft", "Bethesda"];

$(document).ready(function() {
	for (i = 0; i < topics.length; i++) {
		var currentButton = topics[i];
		var buttonTag = $("<button>");

		buttonTag.appendTo("#buttons").append(currentButton).addClass("btn btn-primary").attr("id","button" + topics[i]);
	
		$("#button" + currentButton).on("click", function() {
			var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + currentButton;

			$.ajax({
				url: queryURL,
				method:"GET"
			})

			.done(function(response) {
				var imageUrl = response.data.image_original_url;

				var image = $("<img>");

				image.attr("src", imageUrl);
				image.attr("alt", "image of " + currentButton);

				$("#images").prepend(image);
			})

		});
	}

});

