namespace :ng do
  desc "Build Angular2"
  task :build => :environment do
    sh "cd #{Rails.root.join('client')} && ng build"
  end
end
