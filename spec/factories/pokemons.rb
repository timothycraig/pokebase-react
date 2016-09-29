FactoryGirl.define do
    factory :pikachu, class: Pokemon do |p|
        p.poke_id 25
        p.name "Pikachu"
        p.stamina 1
        p.attack 9001
        p.defence 30
        p.description "It seems quite shocking!"
        p.image "http://placehold.it/512x512"
    end
    factory :bad_pikachu, class: Pokemon do |p|
        p.name "Pikachu"
        p.attack 9001
        p.defence 30
        p.description 22
        p.image "http://placehold.it/512x512"
    end
end
