"""
Minions Decisions SDK — Type Schemas
Custom MinionType schemas for Minions Decisions.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

decision_type = MinionType(
    id="decisions-decision",
    name="Decision",
    slug="decision",
    description="A logged project decision with full context.",
    icon="⚖️",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="rationale", type="string", label="rationale"),
        FieldDefinition(name="alternatives", type="string", label="alternatives"),
        FieldDefinition(name="decidedBy", type="string", label="decidedBy"),
        FieldDefinition(name="decidedAt", type="string", label="decidedAt"),
        FieldDefinition(name="outcome", type="string", label="outcome"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

decision_review_type = MinionType(
    id="decisions-decision-review",
    name="Decision review",
    slug="decision-review",
    description="A retrospective review of a past decision.",
    icon="🔍",
    schema=[
        FieldDefinition(name="decisionId", type="string", label="decisionId"),
        FieldDefinition(name="reviewedAt", type="string", label="reviewedAt"),
        FieldDefinition(name="wasCorrect", type="boolean", label="wasCorrect"),
        FieldDefinition(name="lessons", type="string", label="lessons"),
        FieldDefinition(name="wouldChangeWhat", type="string", label="wouldChangeWhat"),
    ],
)

custom_types: list[MinionType] = [
    decision_type,
    decision_review_type,
]

