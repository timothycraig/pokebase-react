FactoryGirl.define do
    factory :quick_attack, class: Move do |m|
      m.name "Quick Attack"
      m.description "The user lunges at the target at a speed that makes it almost invisible. It is sure to strike first."
      m.power 25
      m.energy_cost -20
      m.accuracy_chance 1
      m.min_level 1
      m.max_level 100
      m.critical_chance 0
      m.association :type, factory: :physical
    end
end
