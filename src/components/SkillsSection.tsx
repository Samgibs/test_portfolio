import React from 'react';
export function SkillsSection() {
  const skills = [{
    category: 'Languages & Core',
    items: [{
      name: 'Kotlin',
      level: 95
    }, {
      name: 'Java',
      level: 90
    }, {
      name: 'XML',
      level: 85
    }, {
      name: 'Gradle',
      level: 80
    }]
  }, {
    category: 'UI Frameworks',
    items: [{
      name: 'Jetpack Compose',
      level: 90
    }, {
      name: 'Material Design',
      level: 95
    }, {
      name: 'Custom Views',
      level: 85
    }, {
      name: 'Animation',
      level: 80
    }]
  }, {
    category: 'Architecture & Libraries',
    items: [{
      name: 'MVVM',
      level: 95
    }, {
      name: 'Clean Architecture',
      level: 90
    }, {
      name: 'Dagger/Hilt',
      level: 85
    }, {
      name: 'Coroutines & Flow',
      level: 90
    }, {
      name: 'Retrofit',
      level: 95
    }, {
      name: 'Room',
      level: 90
    }]
  }, {
    category: 'Testing & Tools',
    items: [{
      name: 'JUnit',
      level: 85
    }, {
      name: 'Espresso',
      level: 80
    }, {
      name: 'Mockito',
      level: 85
    }, {
      name: 'CI/CD',
      level: 75
    }, {
      name: 'Git',
      level: 90
    }, {
      name: 'Firebase',
      level: 85
    }]
  }];
  return <section id="skills" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My expertise in Android development spans across various
            technologies and frameworks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {['RESTful APIs', 'GraphQL', 'JSON/XML Parsing', 'Offline Caching', 'Background Processing', 'Push Notifications', 'Location Services', 'Camera & Media', 'Bluetooth', 'Material Design 3', 'Responsive Layouts', 'Performance Optimization', 'Memory Management', 'Google Play Console', 'App Bundles', 'In-App Purchases', 'App Security', 'Analytics'].map(skill => <span key={skill} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
}