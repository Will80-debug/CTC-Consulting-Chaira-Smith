export const servicesPage = `
    <!-- Page Header -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 font-playfair">Our Services</h1>
            <p class="text-xl text-gray-200 leading-relaxed">
                Comprehensive strategies for building equitable, thriving organizations across all sectors.
            </p>
        </div>
    </section>

    <!-- Services Hero Image -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.stockcake.com/public/a/5/6/a56b32a4-b194-421b-b91f-7568de83494f_large/corporate-meeting-discussion-stockcake.jpg" 
                    alt="Professional consulting team conducting strategic planning session"
                    class="w-full h-80 object-cover"
                    loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-8 left-8 text-white">
                    <h3 class="text-2xl font-bold mb-2">Transforming Organizations Through Strategic Consulting</h3>
                    <p class="text-lg opacity-90">Evidence-based approaches that create lasting change</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Services -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Core Focus Areas</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive strategies for building equitable, thriving organizations
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Psychological Safety -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-shield-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Psychological Safety & Workplace Culture</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Create environments where all team members feel safe to contribute, question, and innovate without fear.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Culture assessments</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Safety audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Team workshops</li>
                        <li class="flex items-center"><i class="fas fa-check text-primary-500 mr-2"></i> Leadership training</li>
                    </ul>
                    <div class="bg-primary-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-primary-800 mb-2">Typical Outcomes:</h4>
                        <p class="text-primary-700 text-sm">40-60% improvement in team engagement and innovation metrics</p>
                    </div>
                </div>
                
                <!-- Racial & Philanthropic Equity -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-balance-scale text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Racial & Philanthropic Equity</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Address systemic inequities and build truly inclusive practices that create measurable change.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Equity audits</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Policy development</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Impact measurement</li>
                        <li class="flex items-center"><i class="fas fa-check text-accent-500 mr-2"></i> Community partnerships</li>
                    </ul>
                    <div class="bg-accent-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-accent-800 mb-2">Proven Impact:</h4>
                        <p class="text-accent-700 text-sm">Most-read article of 2021 on BIPOC psychological safety (GIH)</p>
                    </div>
                </div>
                
                <!-- Organizational Development -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-sitemap text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Organizational Development</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Redesign systems, processes, and structures to support equity and excellence simultaneously.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Systems mapping</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Process redesign</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Change management</li>
                        <li class="flex items-center"><i class="fas fa-check text-gold-500 mr-2"></i> Performance optimization</li>
                    </ul>
                    <div class="bg-gold-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-gold-800 mb-2">Results Focus:</h4>
                        <p class="text-gold-700 text-sm">3x faster transformation vs traditional OD approaches</p>
                    </div>
                </div>
                
                <!-- Violence Prevention -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-hands-helping text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Violence Prevention & Community Engagement</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Build safer communities through proactive prevention strategies and authentic engagement.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Prevention programs</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Community partnerships</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Training & education</li>
                        <li class="flex items-center"><i class="fas fa-check text-red-500 mr-2"></i> Crisis response</li>
                    </ul>
                    <div class="bg-red-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-red-800 mb-2">Community Impact:</h4>
                        <p class="text-red-700 text-sm">Founded 14621 Food Stands, serving thousands during COVID-19</p>
                    </div>
                </div>
                
                <!-- Wellness-Centered Leadership -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Wellness-Centered Leadership</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Develop leaders who prioritize collective wellbeing while driving organizational success.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Leadership coaching</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Wellness frameworks</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Sustainable practices</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i> Stress management</li>
                    </ul>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-green-800 mb-2">Leadership Growth:</h4>
                        <p class="text-green-700 text-sm">500+ leaders transformed through wellness-centered approaches</p>
                    </div>
                </div>
                
                <!-- Strategic Planning -->
                <div class="service-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-chess text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Strategic Planning & Implementation</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Develop and execute strategies that embed equity into every aspect of your operations.
                    </p>
                    <ul class="space-y-2 text-gray-600 mb-6">
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Strategic planning</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Implementation support</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> Progress tracking</li>
                        <li class="flex items-center"><i class="fas fa-check text-purple-500 mr-2"></i> ROI measurement</li>
                    </ul>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-purple-800 mb-2">Success Rate:</h4>
                        <p class="text-purple-700 text-sm">95% client satisfaction with strategic outcomes delivered</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Industry Expertise -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Industry Expertise</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Tailored solutions for your sector's unique challenges and opportunities
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <i class="fas fa-hospital text-3xl text-primary-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Healthcare & Medical</h3>
                    <p class="text-gray-600">Patient care equity, BIPOC healthcare worker support, community health partnerships</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <i class="fas fa-hand-holding-heart text-3xl text-accent-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Nonprofit & Philanthropy</h3>
                    <p class="text-gray-600">Philanthropic equity assessment, board diversity, donor engagement strategies</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
                    <i class="fas fa-graduation-cap text-3xl text-gold-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Education & Academic</h3>
                    <p class="text-gray-600">Student equity programs, faculty development, campus climate transformation</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <i class="fas fa-building text-3xl text-green-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Corporate & Business</h3>
                    <p class="text-gray-600">Workplace culture transformation, executive coaching, inclusive recruitment</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="500">
                    <i class="fas fa-landmark text-3xl text-purple-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Government & Public Sector</h3>
                    <p class="text-gray-600">Public service equity, community engagement, policy development support</p>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="600">
                    <i class="fas fa-cogs text-3xl text-red-500 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
                    <p class="text-gray-600">Tailored LLI Framework™ implementation for unique organizational contexts</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Overview -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Process</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Discovery & Assessment</h3>
                                <p class="text-gray-600">Deep organizational listening to understand current state and aspirations</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Strategy Development</h3>
                                <p class="text-gray-600">Co-create customized roadmap using LLI Framework™ methodology</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Implementation & Support</h3>
                                <p class="text-gray-600">Hands-on guidance through transformation with ongoing measurement</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-1">Sustainability & Growth</h3>
                                <p class="text-gray-600">Ensure lasting change through systems integration and capacity building</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-left">
                    <img 
                        src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/MVU-BAORGL-2020-Q1-Skyscraper-Organizational-Change-Management-Guide-for-Developing-Innovators-Leaders-miniIG1-v3.jpg" 
                        alt="Organizational change management process for innovative leaders"
                        class="w-full h-96 object-cover rounded-2xl shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6 font-playfair">Ready to Transform Your Organization?</h2>
            <p class="text-xl text-gray-200 mb-8">
                Discover which services align best with your organization's needs and goals.
            </p>
            <div class="space-x-6">
                <a href="/assessment" class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Take Free Assessment
                </a>
                <a href="/contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                    Schedule Consultation
                </a>
            </div>
        </div>
    </section>
`