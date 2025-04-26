import { useState } from "react";
import {
	Check,
	ChevronDown,
	ChevronRight,
	Globe,
	MessageSquare,
	Languages,
	CreditCard,
	Search,
	Sparkles,
	Star,
	Users,
	Zap,
	Database,
	FileText,
	Menu,
	X,
    icons,
} from "lucide-react";

const scrollToSection = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("patients");
	const [expandedFAQ, setExpandedFAQ] = useState(null);

	const features = [
		{
			title: "Custom AI-Powered Website",
			description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
			icon: <Globe className="w-6 h-6 text-white" />,
			bgColor: "bg-blue-500",
		},
		{
			title: "Enhanced Patient Conversion",
			description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
			icon: <Users className="w-6 h-6 text-white" />,
			bgColor: "bg-purple-500",
		},
		{
			title: "Real-Time Query Handling",
			description: "Instant response system for patient inquiries with AI-powered chat support.",
			icon: <MessageSquare className="w-6 h-6 text-white" />,
			bgColor: "bg-green-500",
		},
		{
			title: "Medical Report Analysis",
			description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
			icon: <FileText className="w-6 h-6 text-white" />,
			bgColor: "bg-orange-500",
		},
		{
			title: "Improved Lead Generation",
			description: "Data-driven lead generation strategies to attract and engage potential patients.",
			icon: <Zap className="w-6 h-6 text-white" />,
			bgColor: "bg-pink-500",
		},
		{
			title: "comprehensive Healthcare Database",
			description: "Extensive medical information database for accurate patient guidance and support.",
			icon: <Database className="w-6 h-6 text-white" />,
			bgColor: "bg-indigo-500",
		},
		{
			title: "Multilingual Support",
			description: "Breaking language barriers with comprehensive multilingual communication tools.",
			icon: <Languages className="w-6 h-6 text-white" />,
			bgColor: "bg-red-500",
		},
		{
			title: "Seamless Payment Handling",
			description: "Secure and efficient payment processing for medical services globally.",
			icon: <CreditCard className="w-6 h-6 text-white" />,
			bgColor: "bg-teal-500",
		},
    {
			title: "Marketing And SEO Support",
			description: "Optimized digital presence with advanced SEO and marketing strategies.",
      icon: <Search className="w-6 h-6 text-white "/>,
			bgColor: "bg-cyan-500",
		}
	];

	const tabs = [
		{
			id: "patients",
			label: "Patient Management",
			title: "Streamline patient management",
			features: [
				{
					title: "Automated appointment scheduling",
					description: "Let patients book appointments online 24/7 without staff intervention.",
				},
				{
					title: "Patient records management",
					description: "Securely store and access patient records from anywhere.",
				},
				{
					title: "Automated reminders",
					description: "Reduce no-shows with automated SMS and email reminders.",
				},
				{
					title: "Patient portal",
					description: "Give patients access to their records, appointments, and billing information.",
				},
			],
		},
		{
			id: "marketing",
			label: "Marketing",
			title: "Grow your practice with AI marketing",
			features: [
				{
					title: "SEO optimization",
					description: "Attract more patients with optimized online presence.",
				},
				{
					title: "Content marketing",
					description: "AI-generated content tailored to your specialty.",
				},
				{
					title: "Social media management",
					description: "Automated posting and engagement on social platforms.",
				},
				{
					title: "Performance analytics",
					description: "Track and optimize your marketing campaigns.",
				},
			],
		},
		{
			id: "operations",
			label: "Operations",
			title: "Optimize your practice operations",
			features: [
				{
					title: "Staff scheduling",
					description: "Efficiently manage staff schedules and workloads.",
				},
				{
					title: "Inventory management",
					description: "Track supplies and equipment with automated reordering.",
				},
				{
					title: "Billing and payments",
					description: "Streamline billing processes and accept online payments.",
				},
				{
					title: "Reporting and analytics",
					description: "Gain insights into your practice performance.",
				},
			],
		},
	];

	const testimonials = [
		{
			quote: "goGetwell.ai has transformed how we manage patient inquiries. Our response time has decreased by 80% and patient satisfaction has never been higher.",
			name: "Dr. Sarah Johnson",
			title: "Medical Director, Wellness Clinic",
		},
		{
			quote: "The AI-powered website has been a game-changer for our practice. We've seen a 45% increase in new patient appointments since implementation.",
			name: "Dr. Michael Chen",
			title: "Cardiologist, Heart Care Center",
		},
		{
			quote: "The multilingual support feature has allowed us to serve our diverse patient population more effectively. It's like having a translator on staff 24/7.",
			name: "Dr. Maria Rodriguez",
			title: "Family Physician, Community Health",
		},
	];

	const pricingPlans = [
		{
			name: "Starter",
			description: "Perfect for small practices",
			price: 99,
			features: [
				"AI-powered website",
				"Patient scheduling",
				"Basic chat support",
				"Email notifications",
				"5 staff accounts",
			],
			buttonText: "Start free trial",
			popular: false,
		},
		{
			name: "Professional",
			description: "Ideal for growing practices",
			price: 199,
			features: [
				"Everything in Starter",
				"Advanced patient analytics",
				"Custom branding",
				"Multilingual support",
				"Marketing automation",
				"15 staff accounts",
			],
			buttonText: "Start free trial",
			popular: true,
		},
		{
			name: "Enterprise",
			description: "For large healthcare providers",
			price: 399,
			features: [
				"Everything in Professional",
				"Dedicated account manager",
				"Custom integrations",
				"Advanced security features",
				"Priority support",
				"Unlimited staff accounts",
			],
			buttonText: "Contact sales",
			popular: false,
		},
	];

	const faqs = [
		{
			question: "What is goGetwell.ai?",
			answer: "goGetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.",
		},
		{
			question: "How does the AI Agent assist me in my healthcare business?",
			answer: "Our AI Agent automates routine tasks, provides 24/7 patient support, analyzes medical reports, and helps you convert more leads into patients through personalized communication.",
		},
		{
			question: "Is the platform secure and compliant with healthcare regulations?",
			answer: "Absolutely. We maintain strict compliance with healthcare data protection regulations including HIPAA and GDPR, with end-to-end encryption for all patient data.",
		},
		{
			question: "How quickly can I get started with the platform?",
			answer: "You can set up your AI-powered website in as little as 2 minutes. Our intuitive platform guides you through the setup process, and our team is available to help with any questions you might have.",
		},
		{
			question: "Do you offer a free trial?",
			answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.",
		},
	];

	const navItems = [
		{ label: "Features", id: "features" },
		{ label: "Pricing", id: "pricing" },
		{ label: "Testimonials", id: "testimonials" },
		{ label: "FAQ", id: "faq" },
	];

	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<header className="sticky top-0 z-50 bg-white border-b border-gray-100">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<button
						onClick={() => scrollToSection("hero")}
						className="text-2xl font-bold focus:outline-none"
					>
						<span className="text-gray-900">go</span>
						<span className="text-gray-900">Getwell</span>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
							.ai
						</span>
					</button>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => {
									scrollToSection(item.id);
									setMobileMenuOpen(false);
								}}
								className="text-gray-600 hover:text-gray-900 transition focus:outline-none"
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center space-x-4">
						<button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition focus:outline-none">
							Log in
						</button>
						<button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-lg font-medium hover:opacity-90 transition shadow-sm focus:outline-none">
							Start free trial
						</button>
					</div>

					{/* Mobile menu button */}
					<button
						aria-label="Toggle mobile menu"
						aria-expanded={mobileMenuOpen}
						className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<div className="md:hidden bg-white border-t border-gray-100 py-4">
						<div className="container mx-auto px-4 flex flex-col space-y-4">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => {
										scrollToSection(item.id);
										setMobileMenuOpen(false);
									}}
									className="text-gray-600 hover:text-gray-900 transition py-2 text-left focus:outline-none"
								>
									{item.label}
								</button>
							))}
							<div className="pt-4 flex flex-col space-y-3">
								<button className="px-4 py-2 text-center border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition focus:outline-none">
									Log in
								</button>
								<button className="px-4 py-2 text-center bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-lg font-medium hover:opacity-90 transition focus:outline-none">
									Start free trial
								</button>
							</div>
						</div>
					</div>
				)}
			</header>

			<section id="hero" className="py-16 md:py-24 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
								<Sparkles className="w-4 h-4 mr-2" />
								AI-Powered Healthcare Platform
							</div>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
								Transform your healthcare practice with{" "}
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">AI</span>
							</h1>
							<p className="text-xl text-gray-600 mb-8 md:pr-10">
								Streamline operations, enhance patient experiences, and grow your healthcare business with our
								all-in-one AI platform.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="/signup"
									className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-lg font-medium hover:opacity-90 transition shadow-sm text-center"
								>
									Start your free trial
								</a>
								<a
									href="#demo"
									className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition text-center flex items-center justify-center"
								>
									<span>Watch demo</span>
									<ChevronRight className="ml-2 w-4 h-4" />
								</a>
							</div>
							<div className="mt-8 flex items-center">
								<div className="flex -space-x-2">
									{[1, 2, 3, 4].map((i) => (
										<div
											key={i}
											className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
										>
											{i}
										</div>
									))}
								</div>
								<div className="ml-4">
									<div className="flex items-center">
										{[1, 2, 3, 4, 5].map((i) => (
											<Star key={i} className="w-4 h-4 text-yellow-400" />
										))}
									</div>
									<p className="text-sm text-gray-600">From 2,000+ healthcare providers</p>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-200 to-violet-200 rounded-full blur-3xl opacity-30"></div>
							<div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<div className="w-3 h-3 bg-red-500 rounded-full"></div>
										<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
										<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									</div>
									<div className="text-sm font-medium text-gray-500">goGetwell.ai Dashboard</div>
									<div className="w-16"></div>
								</div>
								<div className="p-6">
									<div className="flex items-center justify-between mb-6">
										<h3 className="text-lg font-semibold">Patient Overview</h3>
										<div className="text-sm text-purple-600 font-medium">View all</div>
									</div>
									<div className="grid grid-cols-3 gap-4 mb-6">
										<div className="bg-gray-50 rounded-lg p-4">
											<div className="text-sm text-gray-500 mb-1">New Patients</div>
											<div className="text-2xl font-bold">128</div>
											<div className="text-xs text-green-600 mt-1">+12% this week</div>
										</div>
										<div className="bg-gray-50 rounded-lg p-4">
											<div className="text-sm text-gray-500 mb-1">Appointments</div>
											<div className="text-2xl font-bold">87</div>
											<div className="text-xs text-green-600 mt-1">+5% this week</div>
										</div>
										<div className="bg-gray-50 rounded-lg p-4">
											<div className="text-sm text-gray-500 mb-1">Revenue</div>
											<div className="text-2xl font-bold">$24.5k</div>
											<div className="text-xs text-green-600 mt-1">+18% this week</div>
										</div>
									</div>
									<div className="space-y-3">
										{[1, 2, 3].map((i) => (
											<div key={i} className="flex items-center p-3 border border-gray-100 rounded-lg">
												<img className="w-10 h-10 rounded-full flex-shrink-0" src="https://avatar.iran.liara.run/public/5"/>
												<div className="ml-3">
													<div className="text-sm font-medium">Patient {i}</div>
													<div className="text-xs text-gray-500">Appointment scheduled</div>
												</div>
												<div className="ml-auto text-xs text-gray-500">2h ago</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Logos Section */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<p className="text-center text-gray-600 mb-8">Trusted by leading healthcare providers</p>
					<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
						{[1, 2, 3, 4, 5].map((i) => (
							<div key={i} className="h-8 w-32 bg-gray-200 rounded">Company {i}</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20" id="features">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-one platform for healthcare providers</h2>
						<p className="text-xl text-gray-600">
							Everything you need to streamline your practice, engage patients, and grow your business.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
							>
								<div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.bgColor}`}>
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
								<div className={`h-1 w-full absolute bottom-0 opacity-75 left-0 rounded-b-xl ${feature.bgColor}`}></div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Tabs Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">See how it works</h2>
						<p className="text-xl text-gray-600">
							Our platform is designed to address the unique challenges of healthcare providers.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-2 mb-12">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`px-5 py-2.5 rounded-lg font-medium transition ${
									activeTab === tab.id ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-bold mb-4">{tabs.find((tab) => tab.id === activeTab)?.title}</h3>
							<div className="space-y-4">
								{tabs
									.find((tab) => tab.id === activeTab)
									?.features.map((feature, index) => (
										<div key={index} className="flex items-start">
											<div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
												<Check className="w-4 h-4 text-green-600" />
											</div>
											<div>
												<h4 className="font-medium">{feature.title}</h4>
												<p className="text-gray-600">{feature.description}</p>
											</div>
										</div>
									))}
							</div>
						</div>
						<div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
							<div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
								<div className="text-sm font-medium text-gray-500">
									{tabs.find((tab) => tab.id === activeTab)?.label} Dashboard
								</div>
							</div>
							<div className="p-6 h-80 flex items-center justify-center bg-gray-100">
								<div className="text-gray-500">{tabs.find((tab) => tab.id === activeTab)?.label} Interface Preview</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20" id="testimonials">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by healthcare providers</h2>
						<p className="text-xl text-gray-600">
							See what our customers have to say about how goGetwell.ai has transformed their practice.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
							>
								<div className="flex items-center mb-4">
									{[1, 2, 3, 4, 5].map((i) => (
										<Star key={i} className="w-5 h-5 text-yellow-400" />
									))}
								</div>
								<p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
								<div className="flex items-center">
									<div className="w-12 h-12 rounded-full bg-gray-200"></div>
									<div className="ml-3">
										<div className="font-medium">{testimonial.name}</div>
										<div className="text-sm text-gray-500">{testimonial.title}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-gradient-to-r from-purple-600 to-violet-500 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming healthcare management</h2>
						<p className="text-xl opacity-90">
							Our platform is helping healthcare providers achieve remarkable results.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">2100+</div>
							<div className="text-lg opacity-90">Qualified Doctors</div>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">1000+</div>
							<div className="text-lg opacity-90">Hospitals</div>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">800+</div>
							<div className="text-lg opacity-90">Treatment Plans</div>
						</div>
						<div className="text-center">
							<div className="text-5xl font-bold mb-2">35%</div>
							<div className="text-lg opacity-90">Efficiency Increase</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-20" id="pricing">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
						<p className="text-xl text-gray-600">Choose the plan that's right for your healthcare practice.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{pricingPlans.map((plan, index) => (
							<div
								key={index}
								className={`rounded-xl overflow-hidden border ${
									plan.popular ? "border-purple-200 shadow-lg" : "border-gray-200 shadow-sm"
								}`}
							>
								{plan.popular && (
									<div className="bg-gradient-to-r from-purple-600 to-violet-500 text-white text-center py-2 font-medium">
										Most Popular
									</div>
								)}
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{plan.name}</h3>
									<p className="text-gray-600 mb-6">{plan.description}</p>
									<div className="mb-6">
										<span className="text-4xl font-bold">${plan.price}</span>
										<span className="text-gray-600">/month</span>
									</div>
									<ul className="space-y-3 mb-6">
										{plan.features.map((feature, i) => (
											<li key={i} className="flex items-start">
												<Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<button
										className={`w-full py-2.5 rounded-lg font-medium transition ${
											plan.popular
												? "bg-gradient-to-r from-purple-600 to-violet-500 text-white hover:opacity-90"
												: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
										}`}
									>
										{plan.buttonText}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-gray-50" id="faq">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
						<p className="text-xl text-gray-600">Everything you need to know about goGetwell.ai platform.</p>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
									<button
										className="flex justify-between items-center w-full p-6 text-left font-medium"
										onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
									>
										<span>{faq.question}</span>
										<ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
expandedFAQ === index ? 'rotate-180' : ''
}`} />
									</button>
									{expandedFAQ === index && (
										<div className="px-6 pb-6">
											<p className="text-gray-600">{faq.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-violet-500 rounded-2xl overflow-hidden shadow-xl">
						<div className="p-12 text-center text-white">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your healthcare practice?</h2>
							<p className="text-xl opacity-90 mb-8">
								Join thousands of healthcare providers who are already using goGetwell.ai.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button
									onClick={() => scrollToSection('pricing')}
									className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm"
								>
									Start your free trial
								</button>
								<button
									onClick={() => window.location.href = '/contact'}
									className="px-8 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition"
								>
									Contact sales
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
						<div>
							<a href="/" className="text-2xl font-bold mb-4 inline-block">
								<span className="text-white">go</span>
								<span className="text-white">Getwell</span>
								<span className="text-purple-400">.ai</span>
							</a>
							<p className="text-gray-400 mb-4">
								AI-powered platform for healthcare providers to streamline operations and enhance patient experiences.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-4">Product</h3>
							<ul className="space-y-2">
								<li>
									<a href="#features" className="text-gray-400 hover:text-white transition">
										Features
									</a>
								</li>
								<li>
									<a href="#pricing" className="text-gray-400 hover:text-white transition">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Integrations
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Changelog
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-4">Resources</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Guides
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										API Reference
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-4">Company</h3>
							<ul className="space-y-2">
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										About
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Contact
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-400 hover:text-white transition">
										Privacy
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 mb-4 md:mb-0">© 2025 goGetwell.ai. All rights reserved.</div>
						<div className="flex space-x-6">
							<a href="#" className="text-gray-400 hover:text-white transition">
								Terms
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition">
								Privacy
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition">
								Cookies
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
