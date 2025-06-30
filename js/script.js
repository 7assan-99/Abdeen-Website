// document.addEventListener("DOMContentLoaded", function () {
// 	// Language Toggle Functionality
// 	const arabicBtn = document.getElementById("arabic-btn");
// 	const englishBtn = document.getElementById("english-btn");

// 	arabicBtn.addEventListener("click", function () {
// 		document.body.classList.remove("english");
// 		document.body.setAttribute("dir", "rtl");
// 		arabicBtn.classList.add("active");
// 		englishBtn.classList.remove("active");
// 	});

// 	englishBtn.addEventListener("click", function () {
// 		document.body.classList.add("english");
// 		document.body.setAttribute("dir", "ltr");
// 		arabicBtn.classList.remove("active");
// 		englishBtn.classList.add("active");
// 	});

// 	// Smooth scrolling for navigation links
// 	document.querySelectorAll(".nav-link").forEach((anchor) => {
// 		anchor.addEventListener("click", function (e) {
// 			e.preventDefault();

// 			const targetId = this.getAttribute("href");
// 			const targetElement = document.querySelector(targetId);

// 			if (targetElement) {
// 				const headerOffset = 100;
// 				const elementPosition = targetElement.getBoundingClientRect().top;
// 				const offsetPosition =
// 					elementPosition + window.pageYOffset - headerOffset;

// 				window.scrollTo({
// 					top: offsetPosition,
// 					behavior: "smooth",
// 				});
// 			}
// 		});
// 	});

// 	// Highlight active navigation link while scrolling
// 	const sections = document.querySelectorAll(".content-section");
// 	const navLinks = document.querySelectorAll(".nav-link");

// 	window.addEventListener("scroll", function () {
// 		let current = "";

// 		sections.forEach((section) => {
// 			const sectionTop = section.offsetTop;
// 			const sectionHeight = section.clientHeight;

// 			if (pageYOffset >= sectionTop - 150) {
// 				current = section.getAttribute("id");
// 			}
// 		});

// 		navLinks.forEach((link) => {
// 			link.classList.remove("active");
// 			if (link.getAttribute("href") === `#${current}`) {
// 				link.classList.add("active");
// 			}
// 		});
// 	});
// });

// Function to update select dropdown based on language
function updateSelectOptions() {
	const subjectSelect = document.getElementById("subject");
	if (!subjectSelect) return;

	const isEnglish = document.body.classList.contains("english");

	// Remember the current value
	const currentValue = subjectSelect.value;

	// Create a new select element
	const newSelect = document.createElement("select");
	newSelect.id = "subject";
	newSelect.name = "subject";
	newSelect.dir = isEnglish ? "ltr" : "rtl";

	// Define the options based on language
	const options = [
		{
			value: "arbitration",
			ar: "التحكيم الدولي",
			en: "International Arbitration",
		},
		{
			value: "mediation",
			ar: "التسوية والوساطة",
			en: "Mediation & Settlement",
		},
		{ value: "ip", ar: "الملكية الفكرية", en: "Intellectual Property" },
		{ value: "aml", ar: "مكافحة غسل الأموال", en: "AML & CFT" },
		{ value: "other", ar: "موضوع آخر", en: "Other Subject" },
	];

	// Add options to the new select
	options.forEach((opt) => {
		const option = document.createElement("option");
		option.value = opt.value;
		option.textContent = isEnglish ? opt.en : opt.ar;
		newSelect.appendChild(option);
	});

	// Set the previously selected value
	newSelect.value = currentValue;

	// Replace the old select with the new one
	subjectSelect.parentNode.replaceChild(newSelect, subjectSelect);

	// Add event listeners if needed
	// (Add any event listeners that were on the original select)
}

document.addEventListener("DOMContentLoaded", function () {
	// Language Toggle Functionality
	const arabicBtn = document.getElementById("arabic-btn");
	const englishBtn = document.getElementById("english-btn");

	arabicBtn.addEventListener("click", function () {
		document.body.classList.remove("english");
		document.body.setAttribute("dir", "rtl");
		arabicBtn.classList.add("active");
		englishBtn.classList.remove("active");
		updateSelectOptions();
		updateCustomSelect();
	});

	englishBtn.addEventListener("click", function () {
		document.body.classList.add("english");
		document.body.setAttribute("dir", "ltr");
		arabicBtn.classList.remove("active");
		englishBtn.classList.add("active");
		updateSelectOptions();
		updateCustomSelect();
	});

	// Initialize select options on page load
	updateSelectOptions();

	// Smooth scrolling for navigation links
	document.querySelectorAll(".nav-link").forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const headerOffset = 100;
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition =
					elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		});
	});

	// Highlight active navigation link while scrolling
	const sections = document.querySelectorAll(".content-section");
	const navLinks = document.querySelectorAll(".nav-link");

	window.addEventListener("scroll", function () {
		let current = "";

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (pageYOffset >= sectionTop - 150) {
				current = section.getAttribute("id");
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.getAttribute("href") === `#${current}`) {
				link.classList.add("active");
			}
		});
	});

	// Animation on scroll
	const animateSections = document.querySelectorAll(".content-section");

	// Create the Intersection Observer
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				// If the section is in view
				if (entry.isIntersecting) {
					entry.target.classList.add("animate");
					// Optional: Stop observing after animation is applied
					// observer.unobserve(entry.target);
				} else {
					// Optional: Remove animation when section is out of view
					// entry.target.classList.remove('animate');
				}
			});
		},
		{
			// Options: trigger when at least 10% of the element is in the viewport
			threshold: 0.1,
			rootMargin: "0px 0px -10% 0px", // Slightly offset to trigger earlier
		}
	);

	// Start observing each section
	animateSections.forEach((section) => {
		observer.observe(section);
	});

	// Animation on scroll
	function checkVisibility() {
		const sections = document.querySelectorAll(".content-section");

		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			if (sectionTop < windowHeight * 0.85) {
				section.classList.add("animate");
			}
		});
	}

	// Check visibility on load
	checkVisibility();

	// Check visibility on scroll
	window.addEventListener("scroll", checkVisibility);

	// Custom Select Dropdown Implementation
	function createCustomSelect() {
		const selects = document.querySelectorAll("select");

		selects.forEach((select) => {
			// Create custom select container
			const customSelectContainer = document.createElement("div");
			customSelectContainer.className = "custom-select-container";
			select.parentNode.insertBefore(customSelectContainer, select);

			// Move the original select inside the container
			customSelectContainer.appendChild(select);

			// Create custom select trigger
			const customSelectTrigger = document.createElement("div");
			customSelectTrigger.className = "custom-select-trigger";
			customSelectTrigger.textContent = getVisibleSelectedOption(select);
			customSelectContainer.appendChild(customSelectTrigger);

			// Create custom options container
			const customOptions = document.createElement("div");
			customOptions.className = "custom-options";
			customSelectContainer.appendChild(customOptions);

			// Create custom option elements
			Array.from(select.options).forEach((option) => {
				if (shouldShowOption(option)) {
					const customOption = document.createElement("div");
					customOption.className = "custom-option";
					customOption.setAttribute("data-value", option.value);
					customOption.textContent = option.textContent;

					if (option.selected) {
						customOption.classList.add("selected");
					}

					customOption.addEventListener("click", function () {
						// Update original select
						select.value = this.getAttribute("data-value");

						// Update selected class
						const siblings = this.parentNode.querySelectorAll(".custom-option");
						siblings.forEach((sibling) => sibling.classList.remove("selected"));
						this.classList.add("selected");

						// Update trigger text
						customSelectTrigger.textContent = this.textContent;

						// Close dropdown
						customSelectContainer.classList.remove("open");

						// Trigger change event on original select
						const event = new Event("change", { bubbles: true });
						select.dispatchEvent(event);
					});

					customOptions.appendChild(customOption);
				}
			});

			// Toggle dropdown on trigger click
			customSelectTrigger.addEventListener("click", function () {
				this.parentNode.classList.toggle("open");
			});

			// Close dropdown when clicking outside
			document.addEventListener("click", function (e) {
				if (!customSelectContainer.contains(e.target)) {
					customSelectContainer.classList.remove("open");
				}
			});
		});
	}

	// Helper function to determine if option should be shown based on language
	function shouldShowOption(option) {
		const isEnglish = document.body.classList.contains("english");

		if (option.classList.contains("ar-text") && isEnglish) {
			return false;
		}

		if (option.classList.contains("en-text") && !isEnglish) {
			return false;
		}

		return true;
	}

	// Helper function to get the visible selected option text
	function getVisibleSelectedOption(select) {
		const isEnglish = document.body.classList.contains("english");
		const selectedOption = select.options[select.selectedIndex];

		// Find the appropriate option to display based on language
		if (isEnglish) {
			const englishOptions = Array.from(select.options).filter((opt) =>
				opt.classList.contains("en-text")
			);

			if (englishOptions.length > 0) {
				return englishOptions[0].textContent;
			}
		} else {
			const arabicOptions = Array.from(select.options).filter((opt) =>
				opt.classList.contains("ar-text")
			);

			if (arabicOptions.length > 0) {
				return arabicOptions[0].textContent;
			}
		}

		return selectedOption ? selectedOption.textContent : "";
	}

	// Update custom select display when language changes
	function updateCustomSelect() {
		const customSelects = document.querySelectorAll(".custom-select-container");

		customSelects.forEach((container) => {
			const select = container.querySelector("select");
			const trigger = container.querySelector(".custom-select-trigger");
			const options = container.querySelector(".custom-options");

			// Update trigger text
			trigger.textContent = getVisibleSelectedOption(select);

			// Clear and rebuild options
			options.innerHTML = "";

			Array.from(select.options).forEach((option) => {
				if (shouldShowOption(option)) {
					const customOption = document.createElement("div");
					customOption.className = "custom-option";
					customOption.setAttribute("data-value", option.value);
					customOption.textContent = option.textContent;

					if (option.selected) {
						customOption.classList.add("selected");
					}

					customOption.addEventListener("click", function () {
						// Update original select
						select.value = this.getAttribute("data-value");

						// Update selected class
						const siblings = this.parentNode.querySelectorAll(".custom-option");
						siblings.forEach((sibling) => sibling.classList.remove("selected"));
						this.classList.add("selected");

						// Update trigger text
						trigger.textContent = this.textContent;

						// Close dropdown
						container.classList.remove("open");

						// Trigger change event on original select
						const event = new Event("change", { bubbles: true });
						select.dispatchEvent(event);
					});

					options.appendChild(customOption);
				}
			});
		});
	}

	// Initialize custom select dropdowns
	createCustomSelect();
});
