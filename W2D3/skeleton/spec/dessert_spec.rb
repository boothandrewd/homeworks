require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject { Dessert.new('cake', 5, chef) }
  let(:chef) { double("chef", titleize: 'Chef Andrew the Great Baker') }

  describe "#initialize" do
    it "sets a type" do
      expect(subject.type).to eq('cake')
    end

    it "sets a quantity" do
      expect(subject.quantity).to eq(5)
    end

    it "starts ingredients as an empty array" do
      expect(subject.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new('cake', 'five point three', chef) }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(subject.ingredients).to be_empty
      subject.add_ingredient('flour')
      expect(subject.ingredients).not_to be_empty
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      expect(subject.ingredients).to receive(:shuffle!)
      subject.mix!
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(subject.quantity).to eq(5)
      subject.eat(2)
      expect(subject.quantity).to eq(3)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { subject.eat(6) }.to raise_error('not enough left!')
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(subject.serve).to include(chef.titleize)
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(subject)
      subject.make_more
    end
  end
end
