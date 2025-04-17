import { useState } from 'react';
import { BookOpen, Users, Calendar, MessageCircle, Bell, Search, UserPlus, ChevronDown, Menu, X, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGrade, setActiveGrade] = useState('all');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const upcomingSessions = [
    { id: 1, subject: 'Physics', topic: 'Motion in One Dimension', grade: '11', time: '3:30 PM', date: 'Today', students: 12 },
    { id: 2, subject: 'Mathematics', topic: 'Quadratic Equations', grade: '10', time: '4:45 PM', date: 'Today', students: 8 },
    { id: 3, subject: 'Chemistry', topic: 'Periodic Table', grade: '9', time: '5:30 PM', date: 'Today', students: 15 },
    { id: 4, subject: 'Biology', topic: 'Cell Structure', grade: '12', time: '10:00 AM', date: 'Tomorrow', students: 10 }
  ];
  
  const recentQueries = [
    { id: 1, student: 'Aryan Sharma', grade: '12', subject: 'Physics', query: 'How do electromagnetic waves propagate?', status: 'Answered' },
    { id: 2, student: 'Priya Patel', grade: '11', subject: 'Chemistry', query: 'Difference between sigma and pi bonds', status: 'Pending' },
    { id: 3, student: 'Mohit Kumar', grade: '10', subject: 'Mathematics', query: 'Solving problems on arithmetic progression', status: 'Scheduled' },
    { id: 4, student: 'Sanya Gupta', grade: '9', subject: 'Biology', query: 'Explain the process of photosynthesis', status: 'Answered' }
  ];
  
  const stats = [
    { title: 'Total Students', value: '345', icon: <Users className="h-6 w-6" /> },
    { title: 'Active Sessions', value: '24', icon: <MessageCircle className="h-6 w-6" /> },
    { title: 'Today\'s Schedule', value: '8', icon: <Calendar className="h-6 w-6" /> },
    { title: 'Pending Queries', value: '17', icon: <BookOpen className="h-6 w-6" /> }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-1 min-h-0 bg-indigo-800">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-900">
            <h1 className="text-xl font-bold text-white">DoubtClear</h1>
          </div>
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <a href="#" className="bg-indigo-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <BookOpen className="mr-4 h-6 w-6" />
                Dashboard
              </a>
              <a href="#" className="text-indigo-200 hover:bg-indigo-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <Calendar className="mr-4 h-6 w-6" />
                Schedule
              </a>
              <a href="#" className="text-indigo-200 hover:bg-indigo-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <MessageCircle className="mr-4 h-6 w-6" />
                Queries
              </a>
              <a href="#" className="text-indigo-200 hover:bg-indigo-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <Users className="mr-4 h-6 w-6" />
                Students
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-indigo-700 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div className="inline-block h-9 w-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden fixed inset-0 z-40 flex" style={{display: isMenuOpen ? 'flex' : 'none'}}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleMenu}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-800">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-xl font-bold text-white">DoubtClear</h1>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <a href="#" className="bg-indigo-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <BookOpen className="mr-4 h-6 w-6" />
                Dashboard
              </a>
              <a href="#" className="text-indigo-200 hover:bg-indigo-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <Calendar className="mr-4 h-6 w-6" />
                Schedule
              </a>
              <a href="#" className="text-indigo-200 hover:bg-indigo-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <MessageCircle className="mr-4 h-6 w-6" />
                Queries
              </a>
              <a href="#" className="text-indigo-200 hover:bg-indigo-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                <Users className="mr-4 h-6 w-6" />
                Students
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex bg-indigo-700 p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div className="inline-block h-9 w-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <div className="flex space-x-4">
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">View notifications</span>
                    <Bell className="h-6 w-6" />
                  </button>
                  <button className="relative p-1 bg-white text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Search</span>
                    <Search className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Stats Section */}
              <div className="mt-6">
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.title} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3 text-white">
                            {stat.icon}
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                            <dd className="flex items-baseline">
                              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Grade Filter Section */}
              <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Filter by Grade</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button 
                      onClick={() => setActiveGrade('all')}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${activeGrade === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      All Grades
                    </button>
                    <button 
                      onClick={() => setActiveGrade('9')}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${activeGrade === '9' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Class 9
                    </button>
                    <button 
                      onClick={() => setActiveGrade('10')}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${activeGrade === '10' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Class 10
                    </button>
                    <button 
                      onClick={() => setActiveGrade('11')}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${activeGrade === '11' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Class 11
                    </button>
                    <button 
                      onClick={() => setActiveGrade('12')}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${activeGrade === '12' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Class 12
                    </button>
                  </div>
                </div>
              </div>

              {/* Upcoming Sessions Section */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Upcoming Doubt Sessions</h2>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</a>
                </div>
                <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                  <ul className="divide-y divide-gray-200">
                    {upcomingSessions
                      .filter(session => activeGrade === 'all' || session.grade === activeGrade)
                      .map((session) => (
                      <li key={session.id} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                              {session.grade}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{session.subject}</div>
                              <div className="text-sm text-gray-500">{session.topic}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-6 text-right">
                              <div className="text-sm font-medium text-gray-900">{session.time}, {session.date}</div>
                              <div className="text-sm text-gray-500">{session.students} students registered</div>
                            </div>
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Join
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recent Queries Section */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Student Queries</h2>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</a>
                </div>
                <div className="mt-4 flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Student
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Subject
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Query
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {recentQueries
                              .filter(query => activeGrade === 'all' || query.grade === activeGrade)
                              .map((query) => (
                              <tr key={query.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                                      {query.grade}
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">{query.student}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{query.subject}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm text-gray-900 max-w-xs truncate">{query.query}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    query.status === 'Answered' ? 'bg-green-100 text-green-800' : 
                                    query.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                    'bg-blue-100 text-blue-800'
                                  }`}>
                                    {query.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Section */}
              <div className="mt-8 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h2>
                <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-500 rounded-md p-3 text-white">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div className="ml-5">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Schedule New Session</h3>
                          <p className="mt-1 text-sm text-gray-500">Create a new doubt clearing session for any class.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Schedule Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-500 rounded-md p-3 text-white">
                          <UserPlus className="h-6 w-6" />
                        </div>
                        <div className="ml-5">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Student</h3>
                          <p className="mt-1 text-sm text-gray-500">Register a new student to your platform.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Add Student
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-purple-500 rounded-md p-3 text-white">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div className="ml-5">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Respond to Queries</h3>
                          <p className="mt-1 text-sm text-gray-500">Answer pending student questions.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          View Pending
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}