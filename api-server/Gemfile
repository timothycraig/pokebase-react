source 'https://rubygems.org'

ruby '2.2.3'

gem 'rails', '~> 5.0.0'
gem 'rack-cors'

# JSON
gem 'oj'

# Database gems
gem 'pg', '~> 0.18'

# Front End Assets
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'sass-rails', '~> 5.0'
# gem 'uglifier', '>= 1.3.0'

# Use Puma as the app server
gem 'puma', '~> 3.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console'
end

group :test do
  gem 'database_cleaner', '~> 1.5'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
